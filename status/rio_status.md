## Rio Young

### 10/22
- Added design for LLM Manager, to be implemented in the future
- Added design for Error Handler, to be implemented in the future

### 10/25
- Updated interface design for the LLMPrompt in models.ts to take an array of AccViolations instead of just one

### 11/6
- Worked on LLMManager.ts, tested different methods of calling the llama LLM
- Attempted to call the LLM straight from Typescript, would either return a 404 error or cut off the total message, perhaps due to a token limit
- Got the calls working by calling the LLM from a Python script, which was then called by LLMManager.ts
- Still need to finish the rest of the code (cleaning up the response, putting it into a FileCollection object to be returned)

### 11/7
- Finished first pass of LLMManager
- Takes in an LLMPrompt which has a FileCollection and AccViolation array. We then go through each violation and fix the file corresponding with the violation. We also update the files as we go and then return the final FileCollection

### 11/11
- Changed the input type for LLMManager based on the return value of the inputTransformer step which precedes this one. Now, we take just a FileCollection and for each FileData contained in it, there is a possibility of it containing a "violationInfo" object that contains information about what violation(s) the file has.
- Changed return type to be and created the GeneratedFilesInfo interface in models.ts. This object has information about the original file data as well as the new generated file that were returned by the LLM. It also has the specific code snippets that were changed in the original file for the front end to use to highlight for the user

  ### 11/12
- Changed the code to fit the new input and output types. Minor changes, changed where the violation info came from and the file that it affected.
- Added a new portion to the LLM template that would ask the LLM to also return what they changed specifically delimited by five asterisks.
- Added a portion in the main method to get the changed code snippets and put them in the "updatedCodeBlocks" of the FixedFileData we return.

### 11/20
- Updated the LLMManager file based on the comments in the code review, namely updating it to ensure compliance with the code style outline earlier, removing unused code and comments, and moving testing data to another file,specifically the LLMManager.tests.ts file in backend/src/tests.

