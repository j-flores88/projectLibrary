let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

const thinkAndGrow = new Book('Think And Grow Rich', 'Napolean Hill', 700, true);
myLibrary.push(thinkAndGrow);
const sevenHabits = new Book('The 7 Habits of Highly Effective People', 'Stephen R. Covey', 340, false);
myLibrary.push(sevenHabits);