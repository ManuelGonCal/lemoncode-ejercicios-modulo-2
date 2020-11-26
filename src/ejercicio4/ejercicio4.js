function isBookRead(library, title) {

    const book = library.find(book => book.title === title);

    if (!book) {
        return false;
    }

    return book.isRead;
}

const books = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
];


const ejercicio4 = () => {
    console.log("dado el array:");
    console.log(books);
    console.log("Se desean realizar una serie de comprobaciones mediante la funcion pedida"); 
    console.log("Está leido el libro 'Devastacion'? ", isBookRead(books, "Devastación")); // true
    console.log("Está leido el libro 'Canción de hielo y fuego'?'",isBookRead(books, "Canción de hielo y fuego")); // false
    console.log("Está leido el libro 'Los Pilares de la Tierra'?",isBookRead(books, "Los Pilares de la Tierra")); // false

}



export default ejercicio4