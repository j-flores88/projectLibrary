const libDis = document.getElementById('libraryDisplay');
const newBookForm = document.getElementById('newBookForm');
const newBookBtn = document.getElementById('newBookButton');
const submitBtn = document.getElementById('submitBtn');
const form = document.querySelector('.form');


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
        <div>${book.pages} Pages</div>
        <div>${book.readMessage()}</div>
    `
    libDis.appendChild(bookCard);
});

// window.onload = () => {
//     newBookForm.classList.add('hide')
// };

newBookBtn.onclick = () => {
    newBookForm.classList.remove('hide');
    newBookBtn.classList.add('hide');
};

form.addEventListener('submit', (e) => {
    e.preventDefault(e);

    const formInputs = document.querySelectorAll('input');
    const radios = document.getElementsByName('read')

    formInputs.forEach(input => {
        if(input.type === 'text') console.log(input.value)
    })

    radios.forEach(radio => {
        if(radio.checked) console.log(radio.value)
    })

})