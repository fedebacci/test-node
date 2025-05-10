const { myFunction } = require('./functions.js');


const init = () => {
    myFunction(process.argv[2]);
    // ! DEBUG
    // myFunction(process.argv[2], process);
};

init();