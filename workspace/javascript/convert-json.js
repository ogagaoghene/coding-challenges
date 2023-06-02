const book = {
    title: "God Father",
    author: "Mario Puzo"
}

const bookJSON = JSON.stringify(book);
const bookObject = JSON.parse(bookJSON);
console.log(bookObject.title);