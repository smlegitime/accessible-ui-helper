import { InputValidator } from '../services/inputValidator';

describe('InputValidator', () => {
  it('should validate successfully when file types and counts are balanced', () => {
    const fileCollection = {
      '/index.html': { type: 'html', content: '<!DOCTYPE html><html>...</html>' },
      '/style.css': { type: 'css', content: 'body { font-family: Arial; }' },
      '/script.js': { type: 'js', content: 'console.log("Hello");' },
    };

    expect(() => InputValidator.validateFiles(fileCollection)).not.toThrow();
  });

  it('should throw an error when file types are unbalanced', () => {
    const fileCollection = {
      '/index.html': { type: 'html', content: '<!DOCTYPE html><html>...</html>' },
      '/style.css': { type: 'css', content: 'body { font-family: Arial; }' },
      // Missing a JS file
    };

    expect(() => InputValidator.validateFiles(fileCollection)).toThrow(
      'File type count mismatch'
    );
  });

  it('should throw an error when file size exceeds 200MB', () => {
    const largeContent = 'a'.repeat(200 * 1024 * 1024 + 1); // >200MB
    const fileCollection = {
      '/index.html': { type: 'html', content: largeContent },
      '/style.css': { type: 'css', content: 'body { font-family: Arial; }' },
      '/script.js': { type: 'js', content: 'console.log("Hello");' },
    };

    expect(() => InputValidator.validateFiles(fileCollection)).toThrow(
      'exceeds the 200MB size limit'
    );
  });

  it('should throw an error when a file name contains special characters', () => {
    const fileCollection = {
      '/index$.html': { type: 'html', content: '<!DOCTYPE html><html>...</html>' }, // Invalid file name
      '/style.css': { type: 'css', content: 'body { font-family: Arial; }' },
      '/script.js': { type: 'js', content: 'console.log("Hello");' },
    };

    expect(() => InputValidator.validateFiles(fileCollection)).toThrow(
      'Invalid file name'
    );
  });

//   it('should detect script issues using ESLint', async () => {
//     // Create a mock JavaScript file with a simple linting issue
//     const mockFilePath = './mock.js';
//     const mockContent = `console.log('Hello world' )`; // Missing semicolon

//     // Write mock content to file for testing
//     require('fs').writeFileSync(mockFilePath, mockContent);

//     try {
//       await expect(InputValidator.detectScriptIssues(mockFilePath)).rejects.toThrow(
//         'Issues found'
//       );
//     } finally {
//       // Clean up: Remove mock file after test
//       require('fs').unlinkSync(mockFilePath);
//     }
//   });
});
