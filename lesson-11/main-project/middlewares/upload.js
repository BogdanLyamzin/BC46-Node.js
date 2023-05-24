const multer = require("multer");
const path = require("path");

const {HttpError} = require("../helpers")

const tempDir = path.resolve("temp");

const storage = multer.diskStorage({
    destination: tempDir,
    filename: (req, file, cb) => {
        const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${uniquePrefix}_${file.originalname}`);
    },
});

const upload = multer({
    storage,
    limits: {

    },
    // fileFilter: (req, file, cb) => {
    //     const extention = file.originalname.split(".").pop();
    //     if(extention !== "jpg" || extention !== "png" ) {
    //         cb(HttpError(400, "file format not allow"))
    //     }
    //     cb(null, true);
    // }
})

module.exports = upload;