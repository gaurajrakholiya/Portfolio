const mongoose = require("mongoose");



async function connectMongoDb(url) {
    return mongoose.connect(url).then(() => console.log("server connection successfully")).catch((err) => console.log(err));
}


module.exports = {
    connectMongoDb,
}