/**
 * @fileoverview Performs some error handling for LLMManager and contains custom errors
 * @author Rio Young
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

// import { LlmPrompt } from '../models/models';

// Q: How do we make sure that the generated “fixed” code is axe-core compliant? 
// Do we run a scan against the fixed code until we have no more errors for the page? 
// Do we set an error threshold? 


class ErrorHandler {

    // /**
    //  * Ensure fixed page is both valid and fixes the accessibility issues
    //  * @param fixedPage: contains fixed page info
    //  * @param prompt: contains original report and prompt infor
    //  *                           
    //  * @returns The fixed page generated by the LLM or null
    //  */
    // public getFixedPage(fixedPage: GeneratedFixPage, prompt: LlmPrompt) : GeneratedFixPage | null { return null; }

    //  /**
    //   * Ensures validity of fixed page
    //   * @param fixedPage 
    //   * @returns True if fixed page is valid, false otherwise
    //   */
    // private isValid(fixedPage: GeneratedFixPage) : boolean { return false; }

    // /**
    //   * Ensures fixed page actually fixes the issues
    //   * @param fixedPage 
    //   * @param prompt 
    //   * @returns True if fixed page is valid, false otherwise
    //   */
    // private isFixed(fixedPage: GeneratedFixPage, prompt: LlmPrompt) : boolean { return false; }
    
}

// Error for when a page is not configured properly
class BadPageError extends Error {
    constructor(msg: string) {
        super(msg);
    }
}

// Error for when the fix for a page is invalid or does not properly fix the issue
class BadFixError extends Error {
    constructor(msg: string) {
        super(msg);
    }
}