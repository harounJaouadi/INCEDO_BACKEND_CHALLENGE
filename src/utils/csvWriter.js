import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { stringify } from 'csv-stringify';

export async function writeToCSV(data, filename) {

    const csvData = data.map(artist => ({
        name: artist.name,
        mbid: artist.mbid,
        url: artist.url,
        image_small: artist.image[0]['#text'] ,
        image: artist.image[1]['#text'] 
    }));

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename)
    const directoryPath = path.join(__dirname, '..', 'csv');
    const filePath = path.join(directoryPath, filename);

    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
    }

    const writableStream = fs.createWriteStream(filePath);

    const csvStream = stringify(csvData, {
        header: true,
        columns: [
            { key: 'name', header: 'Name' },
            { key: 'mbid', header: 'MBID' },
            { key: 'url', header: 'URL' },
            { key: 'image_small', header: 'Image Small' },
            { key: 'image', header: 'Image' }
        ]
    });

    
    csvStream.pipe(writableStream) ;

    return new Promise((resolve, reject) => {
        writableStream.on('finish', () => {
            console.log(`Data successfully written to ${filename}`);
            resolve();
        });
        writableStream.on('error', reject);
    });
}