const fs = require('fs');

const data = fs.readFileSync('media_results_new.json', 'utf8');
const mediaItems = JSON.parse(data);

let pageContent = fs.readFileSync('src/app/built-by-bxc/page.tsx', 'utf8');

// Find the array definition and replace it
const startTag = 'const allMediaItems: GalleryItem[] = [';
const startIdx = pageContent.indexOf(startTag);

if (startIdx !== -1) {
    // Find the end of the array. It's the closing bracket before the main component
    let bracketCount = 0;
    let endIdx = -1;
    for (let i = startIdx + startTag.length - 1; i < pageContent.length; i++) {
        if (pageContent[i] === '[') bracketCount++;
        if (pageContent[i] === ']') {
            bracketCount--;
            if (bracketCount === 0) {
                endIdx = i;
                break;
            }
        }
    }

    if (endIdx !== -1) {
        const replacement = `const allMediaItems: GalleryItem[] = ${JSON.stringify(mediaItems, null, 2)}`;
        pageContent = pageContent.substring(0, startIdx) + replacement + pageContent.substring(endIdx + 1);
        fs.writeFileSync('src/app/built-by-bxc/page.tsx', pageContent);
        console.log("Successfully updated page.tsx");
    } else {
        console.error("Could not find end of array");
    }
} else {
    console.error("Could not find start of array");
}
