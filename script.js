let books = JSON.parse(localStorage.getItem("books")) || [];
let issued = JSON.parse(localStorage.getItem("issued")) || [];

function login() {
    let role = document.getElementById("role").value;
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
    let result = books.filter(b => b.id.includes(q) || b.name.includes(q));
    document.getElementById("result").innerHTML =
        result.map(b => `<p>${b.id} - ${b.name}</p>`).join("");
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
