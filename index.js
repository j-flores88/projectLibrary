const libDis = document.getElementById('libraryDisplay');
const newBookBtn = document.getElementById('newBookButton');
const submitBtn = document.getElementById('submitBtn');
const newBookForm = document.getElementById('newBookForm');
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

// const thinkAndGrow = new Book('Think And Grow Rich', 'Napolean Hill', 290, true);
// const sevenHabits = new Book('The 7 Habits of Highly Effective People', 'Stephen R. Covey', 340, false);
// myLibrary.push(thinkAndGrow, sevenHabits);

const refreshLib = (library) => {
    let bookCard = document.createElement("div");

    library.forEach(book => {
        bookCard.innerHTML = `
            <div>${book.title}</div>
            <div>${book.author}</div>
            <div>${book.pages} Pages</div>
            <div>${book.readMessage()}</div>
        `
    });
    libDis.appendChild(bookCard);
};
const toggleHide = () => {
    newBookForm.classList.toggle('hide');
    newBookBtn.classList.toggle('hide');
}

newBookBtn.onclick = () => {
    toggleHide()
};

form.addEventListener('submit', (e) => {
    e.preventDefault(e);
    let title, author, pages, read;

    const formInputs = document.querySelectorAll('input');
    const radios = document.getElementsByName('read');

    formInputs.forEach(input => {
        if(input.type === 'text') {
            switch (input.id) {
                case 'title':
                    title = input.value.trim();
                    break;
                case 'author':
                    author = input.value.trim();
                    break;
            }
        }
        if(input.type === 'number') pages = Number(input.value)
    })

    radios.forEach(radio => {
        if(radio.checked) {
            (radio.value === '1') ? read = true : read = false;
        }
    })
    addToLibrary(new Book(title, author, pages, read));
})

const addToLibrary = (newBook) => {
    if (myLibrary.some((book) => book.title === newBook.title)) return;
    myLibrary.push(newBook)

    refreshLib(myLibrary)
    form.reset()
    toggleHide()
}

window.onload = () => {
    newBookForm.classList.add('hide');
    refreshLib(myLibrary);
};