/**
 * @fileoverview Performs fixes on a site's files based on violation reports by calling an LLM
 * @author Rio Young
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import {
  GeneratedFilesInfo,
  FileData, 
  FileCollection, 
  FixedFileCollection 
} from '../models/models';
import { logging } from '../lib/logging';
import OpenAI from "openai";
import * as dotenv from 'dotenv';
import { ServerError } from './errors/customErrors';
import { BaseCustomError } from './errors/baseCustomError';

const logger = logging.getLogger('services.llmManager');

export class LLMManager {
  /**
   * Main class method
   * @param fileCollection: contains information about the site files themselves as well as
   * any potential violation information
   *                           
   * @returns A GeneratedFilesInfo object that contains the original file collection information
   * as well as new, changed file collection information
   */
  public async getFixes(currentScannedPage:string, fileCollection: FileCollection) : Promise<GeneratedFilesInfo > {
    let fixedFileCollection: FixedFileCollection = {};
    
    for (const fileKey in fileCollection) {
      // get each file
      const fileData = fileCollection[fileKey];

      if (fileData.violationInfo === undefined || fileData.violationInfo.length == 0) {
        continue;
      }
      
      // create a prompt for the violation
      const template = this.promptBuilder(fileData);

      try {
        // call llm with prompt for this fix
        logger.info("Calling LLM");
        let outputString: string = ""
        outputString = await this.callLLM(template);

        // check files validity
        if (outputString !== "" && outputString !== undefined) {
          logger.info("Called LLM successfully")
          const chunks = outputString.split("\n*****")
          
          // Getting updated code blocks
          let updatedCodeBlocks: string[] = []
          
          for (let i = 1; i < chunks.length; i++) {
            updatedCodeBlocks.push(chunks[i])
          }
          
          // Get cleaned entire changed code
          outputString = chunks[0];

          fixedFileCollection[fileKey] = {
            type: fileData.type,
            content: outputString
          };
        }
        else {
          throw new ServerError({
            code: 503,
            message: 'LLM was not called successfully.',
            logging: true
          });
        }
      } catch (error) {
        if (error instanceof BaseCustomError) {
          throw new ServerError({
            code: 500,
            message: 'LLM manager error occurred.',
            logging: true,
            context: { service: 'LlmManager' }
          });
        }
        throw error;
      } 
      
    }

    let generatedFileInfo : GeneratedFilesInfo = {
      currentScannedPage: currentScannedPage,
      originalData: fileCollection,
      generatedCode: fixedFileCollection

    }
    return generatedFileInfo; 
  }

  /**
    * Helper method for printing FileCollection information
    * @param fileCollection 
    */
  private printFileCollection(fileCollection: Object)
  {
    for (let [key, fileData] of Object.entries(fileCollection))
    {
      console.log("fileName: " + key )
      
      if (! ("content" in fileData) || ! ("type" in fileData))
      {
        let originalFileData = fileData["originalData"]
        console.log("original file data")
        console.log("type: " + originalFileData["type"])
        console.log("content: " + originalFileData["content"])

        let generatedFileData = fileData["originalData"]
        console.log("generated file data")
        console.log("type: " + generatedFileData["type"])
        console.log("content: " + generatedFileData["content"])
      }
      else
      {
        console.log("type: " + fileData["type"])
        console.log("content: " + fileData["content"])
      }
    }
  }

   /**
    * Combines violationInfo and fileData information in order to build a prompt for LLM usage
    * @param fileData 
    * @returns String of the prompt that will be used when calling the LLM
    */
  private promptBuilder(fileData: FileData) : string { 
    let content = fileData.htmlWithInlineScripts
    let fileType = fileData.type
    let violationInfo = fileData.violationInfo

    // Additional check to see if there is violationInfo 
    // If there is no violationInfo, there is nothing to fix, so return
    if (violationInfo === undefined  || violationInfo.length == 0) {
      return "";
    }
    
    let failureSummary = "";
    let relatedCode = "";

    // Concatenate each necessary fix
    for (const nodeIndex in violationInfo) {
      failureSummary += '-' + violationInfo[nodeIndex].message + '\n';
      relatedCode += '-' + violationInfo[nodeIndex].targetCode + '\n';
    }

    let promptTemplate = `You are a helpful code assistant that can help a developer
      build accessible web applications. 
      Using the provided context, fix the accessibility issues listed 
      to the best of your ability using only the resources provided. 
      Don't explain the code, just generate or change the code. Generate the code without using any code block delimiters.

      I have a ${fileType} file below:
      
      ${content}

      Please fix the issues listed below and related code to help you fix it:
      ${relatedCode}
      ${failureSummary}      
      
      If there are existing <style></style> or <script></script> tags, please edit the code inside them, as appropriate.
      `;
    
    return promptTemplate;
  }

  /**
   * Takes template returned by prompt builder, calls LLM and returning the fixed filedata as well as the 
   * changed code snippets
   * @param template 
   * @returns Raw LLM output
   */
  private async callLLM(template: string) : Promise<string> {
    
    dotenv.config();

    const apiKey = process.env.GPT_API_TOKEN;
    const openai = new OpenAI({ apiKey: apiKey });
    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: template }],
      stream: true,
    });
    let ret = "" 

    for await (const chunk of stream) {
      // process.stdout.write(chunk.choices[0]?.delta?.content || "");
      ret += chunk.choices[0]?.delta?.content || ""
    }
      return ret; 
  }

}
