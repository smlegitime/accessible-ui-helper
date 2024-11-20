import { ExportRequest } from '../models/models';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import archiver from 'archiver';

class ExportManager {

    /**
     * Generates a PDF file
     * @param reportContent - Content for the PDF file
     * @param path - File save path
     * @returns Returns the path of the generated PDF file
     */
    private async generatePdf(reportContent: string, path: string): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                const pdfFilePath = `${path}/report.pdf`;

                // Create new PDF document
                const doc = new PDFDocument();
                const writeStream = fs.createWriteStream(pdfFilePath);
                
                // Set up listeners for stream completion and error handling
                writeStream.on('finish', () => resolve(pdfFilePath));
                writeStream.on('error', reject);

                // Configure PDF document basic properties and write content
                doc.pipe(writeStream);
                doc.font('Helvetica');
                doc.fontSize(12).text(reportContent, { align: 'left' });
                doc.end();
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * Saves file to specified path
     * @param content - File content
     * @param encoding - File encoding type (html/css/js)
     * @param path - Save path
     * @returns Returns the path of the saved file
     */
    
    private async saveFile(content: string, encoding: string, path: string): Promise<string> {
         // Validate file encoding type
        const match = encoding.toLowerCase().match(/^(html|css|js)$/);
        if (!match) {
            throw new Error("Unsupported encoding type. Must be 'html', 'css', or 'js'.");
        }

        const fileExtension = match[0];
        const filePath = `${path}/report.${fileExtension}`;

        // Write file content
        await fs.promises.writeFile(filePath, content, 'utf-8');
        return filePath;
    }


    /**
     * Packages multiple files into a ZIP
     * @param files - Array of file paths to be packaged
     * @param path - ZIP file save path
     * @returns Returns the path of the generated ZIP file
     */
    private async packageFiles(files: string[], path: string): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                const zipFilePath = `${path}/export_package.zip`;
                const output = fs.createWriteStream(zipFilePath);

                // Create ZIP archiver with compression level 6
                const archive = archiver('zip', { zlib: { level: 6 } });

                 // Set up output stream event listeners
                output.on('close', () => resolve(zipFilePath));
                output.on('error', reject);
                archive.on('error', reject);

                archive.pipe(output);

                // Iterate through all files and add them to ZIP
                for (const filePath of files) {
                    if (fs.existsSync(filePath)) {
                        const fileName = filePath.split('/').pop() || filePath;
                        archive.file(filePath, { name: fileName });
                    }
                }

                archive.finalize();
            } catch (error) {
                reject(error);
            }
        });
    }


    /**
     * Main method for exporting all files
     * @param exportRequest - Export request object containing file contents and configurations
     * @returns Returns the path of the final generated ZIP file
     */
    public async exportAllFiles(exportRequest: ExportRequest): Promise<string> {
        const generatedFiles: string[] = [];
        const path = exportRequest.outputPath;

        try {
            // Process each file sequentially
            for (const exportPackage of exportRequest.files) {
                const { isScannedReport, contents, encoding } = exportPackage;
                
                // Generate PDF or save as other format based on whether it's a scanned report
                const filePath = isScannedReport 
                    ? await this.generatePdf(contents, path)
                    : await this.saveFile(contents, encoding!, path);
                
                generatedFiles.push(filePath);
            }

            // Create zip with all generated files
            const zipPath = await this.packageFiles(generatedFiles, path);
            return zipPath;

        } catch (error) {
            console.error('Error in exportAllFiles:', error);
            throw error;
        }
    }
}

export default ExportManager;