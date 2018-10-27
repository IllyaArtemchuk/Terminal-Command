const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
    return `${acc} ${file} `;
      }, '');

console.log(filesToString);
       });


 };

 module.exports.touch = (fileName, fileContent) => {
   fs.writeFile(fileName, fileContent, (err) => {
    if (err) throw err;

      });

  console.log("File Created");
 };

 module.exports.mkdir = (dirName) => {
   const newDirName = "./" + dirName;
   fs.mkdir(newDirName, { recursive: true }, (err) => {
   if (err) throw err;
 });

 console.log (dirName + " Created")
};
