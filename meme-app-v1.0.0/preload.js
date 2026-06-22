const { contextBridge } = require('electron');
const fs = require('fs');
const path = require('path');

function getMediaFiles(folder, extensions) {
  const folderPath = path.join(__dirname, folder);

  try {
    if (!fs.existsSync(folderPath)) {
      console.error(`Missing folder: ${folderPath}`);
      return [];
    }

    return fs.readdirSync(folderPath)
      .filter(file => {
        const fullPath = path.join(folderPath, file);

        return (
          fs.statSync(fullPath).isFile() &&
          extensions.includes(path.extname(file).toLowerCase())
        );
      });
  } catch (err) {
    console.error(err);
    return [];
  }
}

contextBridge.exposeInMainWorld('memeAPI', {
  getSounds: () =>
    getMediaFiles('sounds', [
      '.mp3',
      '.wav',
      '.ogg',
      '.m4a'
    ]),

  getImages: () =>
    getMediaFiles('images', [
      '.png',
      '.jpg',
      '.jpeg',
      '.gif',
      '.webp'
    ])
});

console.log('Preload loaded');
console.log('Sounds:', getMediaFiles('sounds', ['.mp3', '.wav', '.ogg', '.m4a']));
console.log('Images:', getMediaFiles('images', ['.png', '.jpg', '.jpeg', '.gif', '.webp']));