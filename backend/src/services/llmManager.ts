/**
 * @fileoverview Performs fixes on a site's files based on violation reports by calling an LLM
 * Created: Rio Young
 * Created date: Oct 22, 2024 | Updated date: 11/20/24
 * @copyright 2024. All rights reserved.
 */

import {GeneratedFilesInfo, FileData, AccViolation, FileCollection, FixedFileCollection } from '../models/models';
import OpenAI from "openai";
import * as dotenv from 'dotenv';

export class LLMManager {


  /**
   * Main class method
   * @param fileCollection: contains information about the site files themselves as well as
   * any potential violation information
   *                           
   * @returns A GeneratedFilesInfo object that contains the original file collection information
   * as well as new, changed file collection information
   */
  public async getFixes(fileCollection: FileCollection) : Promise<GeneratedFilesInfo >
  { 
    let cleanFileCollection: FileCollection = {}
    let fixedFileCollection: FixedFileCollection = {}
    
    for (const fileKey in fileCollection)
    {
      // get each file
      const fileData = fileCollection[fileKey]

      cleanFileCollection[fileKey] = {
        type: fileData.type,
        content: fileData.content,
      };

      if (fileData.violationInfo === undefined || fileData.violationInfo.length == 0)
      {
        continue;
      }
      
      // create a prompt for the violation
      const template = this.promptBuilder(fileData);
      console.log("Generated template: "+ template)

      // call llm with prompt for this fix
      let outputString = ""
      outputString = await this.callLLM(template);
      console.log("Calling LLM")

      // check files validity
      if (outputString != "" )
      {
        console.log("Called LLM successfully")
        const chunks = outputString.split('```')
        
        // Getting updated code blocks
        let updatedCodeBlocks: string[] = []
        let changes = chunks[3];
        
        let lines = changes.split('\n');
        if (lines.length > 1) {
          // remove file type from first line and delimiter (set in callLLM) from last
          changes = lines.slice(1, -1).join('\n');

          let changeArrary = changes.split("\n*****")
          for (const i in changeArrary)
          {
            updatedCodeBlocks.push(changeArrary[i])
          }
        }
        
        // Get cleaned entire changed code
        outputString = chunks[1];

        // remove first and last lines, they are always just ```
        // first thing will be nothing, second will be entire changed code
        outputString = chunks[1];
        
        // remove first and last lines, they are always just ```
        lines = outputString.split('\n');
        if (lines.length <= 2) {
          continue; // if there are less than 2 lines, this return value is no good, get outta there
        }

        outputString = lines.slice(1, -1).join('\n');

        fixedFileCollection[fileKey] = {
          type: fileData.type,
          content: outputString,
          updatedCodeBlocks: updatedCodeBlocks,
        };

      }
      else
      {
        console.log("Did not call LLM successfully")
      }
      
    }

    let generatedFileInfo : GeneratedFilesInfo = {
      originalData: cleanFileCollection,
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
  private promptBuilder(fileData: FileData) : string 
  { 
    let content = fileData.content
    let fileType = fileData.type
    let violationInfo = fileData.violationInfo

    // Additional check to see if there is violationInfo 
    // If there is no violationInfo, there is nothing to fix, so return
    if (violationInfo === undefined  || violationInfo.length == 0)
    {
      return "";
    }
    
    let failureSummary = "";

    // Concatenate each necessary fix
    for (const nodeIndex in violationInfo)
    {
      failureSummary += violationInfo[nodeIndex].message
    }

    let promptTemplate = `You are a helpful code assistant that can help a developer
      develop accessible web applications. 
      Using the provided context, answer the user's question 
      to the best of your ability using only the resources provided. 
      Don't explain the code, just generate the code block itself.

      I have a ${fileType} file below:
      
      ${content}

      Please fix the issues below:
      ${failureSummary}
      
      After the code block, please print each changed code snippet separated by "*****" without any additional text.
      `;
    
    return promptTemplate;
  }

  /**
   * Takes template returned by prompt builder, calls LLM and returning the fixed filedata as well as the 
   * changed code snippets
   * @param template 
   * @returns Raw LLM output
   */
  private async callLLM(template: string) : Promise<string> 
  { 
    dotenv.config();

    const apiKey = process.env.GPT_API_TOKEN;
    const openai = new OpenAI({apiKey: apiKey});
    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: template }],
      stream: true,
    });
    let ret = "" 
    for await (const chunk of stream) {
      process.stdout.write(chunk.choices[0]?.delta?.content || "");
      ret += chunk.choices[0]?.delta?.content || ""
    }

      return ret; 
  }

}
