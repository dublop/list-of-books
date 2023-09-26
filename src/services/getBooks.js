import Books from '../mocks/books.json'

export function getBooks() {
    const books = Books.library
    
    return books?.map(book => ({
        title: book.book.title,
        pages: book.book.pages,
        genre: book.book.genre,
        cover: book.book.cover,
        synopsis: book.book.synopsis,
        year: book.book.year,
        id: book.book.ISBN,
        author: book.book.author,
    }))
}