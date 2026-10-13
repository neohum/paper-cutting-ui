const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

const startMarker = 'SECTION 1: THE CORE PRIMITIVES & STYLING VARIATIONS (01 ~ 08)';
const endMarker = 'MATTE CREAM 3D ART SURFACE TEXTURE SHOWCASE';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Markers not found! startIndex:', startIndex, 'endIndex:', endIndex);
  process.exit(1);
}

// Find the comment start before startIndex
const commentStart = content.lastIndexOf('<!--', startIndex);
// Find the comment start before endIndex
const commentEnd = content.lastIndexOf('<!--', endIndex);

if (commentStart === -1 || commentEnd === -1) {
  console.error('Comment markers not found!');
  process.exit(1);
}

const before = content.slice(0, commentStart);
const after = content.slice(commentEnd);

const newContent = before + after;
fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`Successfully removed 30 scenario sections. Removed ${commentEnd - commentStart} characters.`);
