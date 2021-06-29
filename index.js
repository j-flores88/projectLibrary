const libDis = document.getElementById('libraryDisplay');
const newBookBtn = document.getElementById('newBookButton');
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

const refreshLib = (library) => {
    let bookCard = document.createElement("div");
    let currentBook;

    let readButton = document.createElement('button');
        library.forEach((book) => {
            if(book.read) {
                readButton.innerHTML = 'Read'
                readButton.setAttribute('class', "btn btn-outline-success");
            } else {
                readButton.innerHTML = 'Not Read'
                readButton.setAttribute('class', "btn btn-outline-warning");
            }
        });
        readButton.onclick = () => {
            toggleRead(library, readButton)
        }

    let removeBtn = document.createElement('button');
        removeBtn.setAttribute('class', "btn btn-danger buttonCSS")
        removeBtn.innerHTML = 'Remove'
        removeBtn.onclick = (e) => {
            libDis.removeChild(bookCard)
            removeFromLib(currentBook)
        }

    library.forEach(book => {
        currentBook = book.title;
        bookCard.setAttribute('class', '.col-lg-6 .col-sm-3 bookCardCSS')
        bookCard.innerHTML = `
            <div id="${book.title}" class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
                    <p class="card-text">${book.pages} Pages</p>
                </div>
            </div>
        `
        bookCard.appendChild(readButton)
        bookCard.appendChild(removeBtn)
    });
    libDis.appendChild(bookCard);
};

const toggleHide = () => {
    newBookForm.classList.toggle('hide');
    newBookForm.classList.toggle('bookCardCSS')
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

const toggleRead = (library, button) => {
    library.forEach(book => {
        if(book.read) {
            book.read = false;
        } else {
            book.read = true;
        }
    })
    if(button.innerHTML !== 'Read') {
        button.innerHTML = 'Read'
        button.setAttribute('class', "btn btn-outline-success")
    } else {
        button.innerHTML = 'Not Read'
        button.setAttribute('class', "btn btn-outline-warning")
    }
};

const addToLibrary = (newBook) => {
    if (myLibrary.some((book) => book.title === newBook.title)) return;
    myLibrary.push(newBook)

    refreshLib(myLibrary)
    form.reset()
    toggleHide()
};

const removeFromLib = (bookTitle) => {
    myLibrary = myLibrary.filter(books => books.title !== bookTitle);
}

window.onload = () => {
    newBookForm.classList.add('hide');
    refreshLib(myLibrary);
};