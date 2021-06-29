const libDis = document.getElementById('libraryDisplay')

let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

Book.prototype.readMessage = function() {
    let message;
    (!this.read) ? message = 'Have Not Read' : message = "Have Read";
    return message;
}

const thinkAndGrow = new Book('Think And Grow Rich', 'Napolean Hill', 290, true);
myLibrary.push(thinkAndGrow);
const sevenHabits = new Book('The 7 Habits of Highly Effective People', 'Stephen R. Covey', 340, false);
myLibrary.push(sevenHabits);

myLibrary.forEach(book => {
    //on submit, clear all old data? or check if it alread exist
    let bookCard = document.createElement("div");
    bookCard.innerHTML = `
        <div>${book.title}</div>
        <div>${book.author}</div>
        <div>${book.pages}</div>
        <div>${book.readMessage()}</div>
    `
    libDis.appendChild(bookCard);
})