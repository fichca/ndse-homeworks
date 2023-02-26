const fs = require("fs/promises");
const path = require("path");

class DataService {

    constructor(string) {
        string = isEmpty(string) ? "default.txt" : string + ".txt";
        userPath = path.join(__dirname, string);
        (async () => {
            fileHandlePromise = await handle(userPath);
        })();
    }

    saveResult(result) {
        fileHandlePromise.appendFile(result.toString() + ", ");
    }
}

function isEmpty(str) {
    return (!str || str.length === 0);
}

async function handle(pathToSave) {
    return await fs.open(pathToSave, "w+");
}

let userPath;
let fileHandlePromise;


module.exports = DataService