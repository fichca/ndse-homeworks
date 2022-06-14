const BookService = require('./BookService.js');
const express = require('express');
const {port} = require('./config.js')

const bookService = new BookService()
const app = express()
app.use(express.json())


app.post("/api/user/login", (req, res) => {
    res.status(201);
    res.json({id: 1, mail: "test@mail.ru"})
})


app.get("/api/books", (req, res) => {
    res.status(200);
    bookService.getAll()
        .then(all => {
            res.json(all)
        })
})

app.get("/api/books/:id", (req, res) => {
    const {id} = req.params
    bookService.getById(id)
        .then(book => {
            res.status(200);
            res.json(book)
        })
        .catch(() => {
            res.status(404);
            res.send()
        })
})

app.post("/api/books", (req, res) => {
    const {title, description, authors, favorite, fileCover, fileName} = req.body;
    bookService.create(title, description, authors, favorite, fileCover, fileName)
        .then(book => {
            res.status(200);
            res.json(book);
        })
        .catch(() => {
            res.status(400);
            res.send();
        })
})

app.put("/api/books/:id", (req, res) => {
    const {id} = req.params
    const {title, description, authors, favorite, fileCover, fileName} = req.body;

    bookService.update(title, description, authors, favorite, fileCover, fileName, id)
        .then(book => {
            res.status(200);
            res.json(book)
        })
        .catch(() => {
            res.status(404);
            res.send()
        })
})

app.delete("/api/books/:id", (req, res) => {
    const {id} = req.params
    let promiseDelete = bookService.delete(id);
    res.status(200);
    promiseDelete.then(() => res.send("OK"))
})


app.listen(port, () => {
    console.log(`Start on port ${port}`);
})