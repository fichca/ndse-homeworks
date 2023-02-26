const Book = require('./Book.js');
const {v4: uuid} = require('uuid')

class BookService {

    getAll() {
        return new Promise((resolve) => {
            resolve(books)
        });
    }

    existById(id) {
        if (books.length === 0) {
            return false;
        }
        let idx = books.findIndex(book => book.getId() === id);
        return idx !== -1;
    }

    getById(id) {
        return new Promise(async (resolve, reject) => {
            if (this.existById(id)) {
                resolve(await getById(id));
            } else {
                reject("Not found");
            }
        });
    }

    create(title, description, authors, favorite, fileCover, fileName) {
        return new Promise((resolve, reject) => {
                if (validate(title, description, authors, favorite, fileCover, fileName)) {
                    let newBook = new Book(uuid(), title, description, authors, favorite, fileCover, fileName);
                    books.push(newBook);
                    resolve(newBook)
                } else {
                    reject("Validate error.");
                }
            }
        )
    }

    update(title, description, authors, favorite, fileCover, fileName, id) {
        return new Promise(async (resolve, reject) => {
            if (this.existById(id)) {
                let book = await getById(id);
                if (title !== undefined) {
                    book.setTitle(title);
                }
                if (description !== undefined) {
                    book.setDescription(description);
                }
                if (authors !== undefined) {
                    book.setAuthors(authors);
                }
                if (favorite !== undefined) {
                    book.setFavorite(favorite);
                }
                if (fileCover !== undefined) {
                    book.setFileCover(fileCover);
                }
                if (fileName !== undefined) {
                    book.setFileName(fileName);
                }
                resolve(book);
            } else {
                reject("Not found");
            }
        });
    }

    async delete(id) {
        let idx = books.findIndex(book => book.getId() === id);
        if (idx !== -1) {
            books.splice(idx, 1);
        }
    }
}

async function getById(id) {
    let idx = books.findIndex(book => book.getId() === id);
    return books[idx];
}

function validate(title, description, authors, favorite, fileCover, fileName) {
    return !(title === undefined || description === undefined || authors === undefined || favorite === undefined || fileCover === undefined || fileName === undefined);
}

const books = [];

module.exports = BookService;