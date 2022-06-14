class Book {

    constructor(id, title, description, authors, favorite, fileCover, fileName) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
    }

    id;
    title;
    description;
    authors;
    favorite;
    fileCover;
    fileName;


    getId() {
        return this.id;
    }

    setId(value) {
        this.id = value;
    }

    getTitle() {
        return this.title;
    }

    setTitle(value) {
        this.title = value;
    }

    getDescription() {
        return this.description;
    }

    setDescription(value) {
        this.description = value;
    }

    getAuthors() {
        return this.authors;
    }

    setAuthors(value) {
        this.authors = value;
    }

    getFavorite() {
        return this.favorite;
    }

    setFavorite(value) {
        this.favorite = value;
    }

    getFileCover() {
        return this.fileCover;
    }

    setFileCover(value) {
        this.fileCover = value;
    }

    getFileName() {
        return this.fileName;
    }

    setFileName(value) {
        this.fileName = value;
    }
}


module.exports = Book;