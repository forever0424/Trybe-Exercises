const fs = require('fs/promises');

module.exports = async (file, data) => {
  await fs.writeFile(`./${file}`, data);
  return 'ok';
}