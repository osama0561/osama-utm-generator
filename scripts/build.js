const fs = require('fs');
fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist', { recursive: true });
fs.copyFileSync('index.html', 'dist/index.html');
fs.copyFileSync('README.md', 'dist/README.txt');
console.log('built dist');
