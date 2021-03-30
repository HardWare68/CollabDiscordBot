const fs = require('fs');

function readJSON(paramFile){
  try {

    const data = fs.readFileSync(paramFile, 'utf8');

    // parse JSON string to JSON object
    const jsonOBJ = JSON.parse(data);

    return jsonOBJ;

  } catch (err) {
    console.log(`Error reading file from disk: ${err}`);
  }
}

function writeJSON(paramFile, paramObj){
  try {
      // convert JSON object to a string
      const data = JSON.stringify(paramObj, null, 4);

      // write file to disk
      fs.writeFileSync(paramFile, data, 'utf8');

      console.log(`File is written successfully!`);

  } catch (err) {
      console.log(`Error writing file: ${err}`);
  }
}

module.exports = {readJSON, writeJSON};