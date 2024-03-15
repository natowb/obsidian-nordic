import { render } from 'node-sass';
import { writeFile } from 'fs';
// Input and output files
const inputFile = './src/main.scss';
const outputFile = './theme.css';

// Compile SCSS/SASS file
render({
    file: inputFile,
    outFile: outputFile,
    outputStyle: "compressed"
}, (error, result) => {
    if (error) {
        console.error('Error compiling SCSS:', error);
    } else {
        writeFile(outputFile, result.css, err => {
            if (err) {
                console.error('Error writing CSS file:', err);
            } else {
                console.log(`Compiled ${inputFile} -> ${outputFile}`);
            }
        });
    }
});
