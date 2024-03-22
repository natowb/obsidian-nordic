import { render } from 'node-sass';
import { writeFile, copyFile } from 'fs';
import path from "path";

const inputFile = './src/main.scss';
const outputFile = './theme.css';
render({
    file: inputFile,
    outFile: outputFile,
    outputStyle: "compact"
}, (error, result) => {
    if (error) {
        console.error('Error compiling SCSS:', error);
    } else {
        writeFile(outputFile, result.css, err => {
            if (err) {
                console.error('Error writing CSS file:', err);
            } else {
                console.log(`Compiled ${inputFile} -> ${outputFile}`);
                if (process.env.NODE_ENV === "DEV") {
    
                    const sourceFolder = './';
                    const sourceFiles = ['manifest.json', 'theme.css'];
                    const destinationFolder = './test-vault/.obsidian/themes/Nordic';
                    
                    sourceFiles.forEach(fileName => {
                        const sourceFilePath = path.join(sourceFolder, fileName);
                        const destinationFilePath = path.join(destinationFolder, fileName);
                        
                        copyFile(sourceFilePath, destinationFilePath, (err) => {
                            if (err) {
                                console.error(`Error copying file ${fileName}: ${err}`);
                            } else {
                                console.log(`Copied ${fileName} to ${destinationFilePath}`);
                            }
                        });
                    });
                }
            }
        });
    }
});

