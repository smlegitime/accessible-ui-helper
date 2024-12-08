import ExportManager from '../services/ExportManager';
import fs from 'fs';
import path from 'path';

/* istanbul ignore next */
describe('ExportManager', () => {
    const exportManager = new ExportManager();
    const outputPath = path.resolve('./test_outputs');
    beforeAll(() => {
        if (!fs.existsSync(outputPath)) {
            fs.mkdirSync(outputPath, { recursive: true });
        }
    });


    it('should generate a ZIP file with all exports', async () => {
        const exportRequest = {
            files: [
                { 
                    isScannedReport: false, 
                    contents:  `
                    <div class="report">
                      <h1>Report Title</h1>
                      <p>This is the report content</p>
                    </div>
                  `, 
                    encoding: "html" 
                },
                { 
                    isScannedReport: true, 
                    contents: "Report content", 
                    encoding: "" 
                }
            ],
            outputPath
        };

        const zipPath = await exportManager.exportAllFiles(exportRequest);
        
        // Verify zip file was created
        expect(zipPath).toBeDefined();
        expect(zipPath).toMatch(/\.zip$/);
        expect(fs.existsSync(zipPath)).toBe(true);
    
    }); 
});