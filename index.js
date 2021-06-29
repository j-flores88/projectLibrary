let myLybrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

Book.prototype.info = function() {
    let read;
    (!read) ? read = 'have not read' : read = 'have read';
    return `${this.title}, by ${this.author}, ${this.pages} long, ${read}.`
};