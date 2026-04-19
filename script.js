let books = JSON.parse(localStorage.getItem("books")) || [];

function login() {
    window.location.href = "dashboard.html";
}

function signup() {
    alert("Registered!");
}

function addBook() {
    let id = bookId.value;
    let name = bookName.value;
    let author = author.value;

    books.push({ id, name, author });
    localStorage.setItem("books", JSON.stringify(books));
}

function deleteBook() {
    let id = bookId.value;
    books = books.filter(b => b.id !== id);
    localStorage.setItem("books", JSON.stringify(books));
}

function updateBook() {
    let id = bookId.value;
    books = books.map(b => b.id === id ? { id, name: bookName.value, author: author.value } : b);
    localStorage.setItem("books", JSON.stringify(books));
}

function searchBook() {
    let q = search.value;
    let res = books.filter(b => b.name.includes(q));
    result.innerHTML = res.map(b => `<p>${b.id} ${b.name}</p>`).join("");
}

function issueBook() {
    alert("Book Issued!");
}

function returnBook() {
    alert("Book Returned!");
}
