let books = JSON.parse(localStorage.getItem("books")) || [];

function login() {
    let role = document.getElementById("role").value;
    if (role === "admin")
        window.location.href = "admin.html";
    else
        window.location.href = "student.html";
}

function signup() {
    alert("User Registered!");
}

function addBook() {
    let id = document.getElementById("bookId").value;
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;

    books.push({ id, name, author });
    localStorage.setItem("books", JSON.stringify(books));

    alert("Book Added!");
}

function deleteBook() {
    let id = document.getElementById("bookId").value;
    books = books.filter(b => b.id !== id);
    localStorage.setItem("books", JSON.stringify(books));
    alert("Deleted!");
}

function updateBook() {
    let id = document.getElementById("bookId").value;
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;

    books = books.map(b => b.id === id ? { id, name, author } : b);
    localStorage.setItem("books", JSON.stringify(books));

    alert("Updated!");
}

function searchBook() {
    let query = document.getElementById("search").value;
    let result = books.filter(b => b.name.includes(query) || b.id.includes(query));

    document.getElementById("result").innerHTML =
        result.map(b => `<p>${b.id} - ${b.name} (${b.author})</p>`).join("");
}
