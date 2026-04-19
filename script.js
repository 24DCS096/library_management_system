let books = JSON.parse(localStorage.getItem("books")) || [];
let issued = JSON.parse(localStorage.getItem("issued")) || [];

function login() {
    window.location.href = "home.html";
}

function signup() {
    window.location.href = "home.html";
}

function addBook() {
    let id = bookId.value;
    let name = bookName.value;
    let author = author.value;
    books.push({id,name,author});
    localStorage.setItem("books", JSON.stringify(books));
    alert("Added");
}

function deleteBook() {
    let id = bookId.value;
    books = books.filter(b => b.id !== id);
    localStorage.setItem("books", JSON.stringify(books));
}

function updateBook() {
    let id = bookId.value;
    books = books.map(b => b.id === id ? {id, name:bookName.value, author:author.value} : b);
    localStorage.setItem("books", JSON.stringify(books));
}

function searchBook() {
    let q = search.value;
    let res = books.filter(b => b.name.includes(q) || b.id.includes(q));
    result.innerHTML = res.map(b => `${b.id} - ${b.name}`).join("<br>");
}

function issueBook() {
    let id = issueId.value;
    issued.push(id);
    localStorage.setItem("issued", JSON.stringify(issued));
    alert("Issued");
}

function returnBook() {
    let id = returnId.value;
    issued = issued.filter(b => b !== id);
    localStorage.setItem("issued", JSON.stringify(issued));
    alert("Returned");
}
