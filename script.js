function addBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let quantity = document.getElementById("quantity").value;

    let book = { title, author, quantity };

    fetch("http://localhost:8080/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    })
    .then(res => res.text())
    .then(data => alert(data));
}
