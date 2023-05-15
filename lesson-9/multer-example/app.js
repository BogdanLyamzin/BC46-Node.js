const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const {nanoid} = require("nanoid");
const fs = require("fs/promises");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"))

const books = [];

const tempDir = path.resolve("temp");

const multerConfig = multer.diskStorage({
    destination: tempDir,
    filename: (req, file, cb) => {
        const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${uniquePrefix}_${file.originalname}`);
    }
});

const upload = multer({
    storage: multerConfig,
})

app.get("/api/books", async(req, res)=> {
    res.json(books);
});

const booksDir = path.resolve("public", "books");
// upload.fields([{name: "cover", maxCount: 1}, {name: "subcover", maxCount: 2}])
// upload.array("cover", 8);
app.post("/api/books", upload.single("cover"), async(req, res)=> {
    const {path: tempUpload, filename} = req.file;
    const resultUpload = path.join(booksDir, filename);
    await fs.rename(tempUpload, resultUpload);

    const cover = path.join("books", filename);
    const newBook = {
        id: nanoid(),
        ...req.body,
        cover,
    }

    books.push(newBook);

    res.status(201).json(newBook)
})

app.listen(3000);