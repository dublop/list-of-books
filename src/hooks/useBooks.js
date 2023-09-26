import { getBooks } from '../services/getBooks'
import { useReadingList } from './useReadingList'

export function useBooks({filter}) {
    const {addToReadingList, removeFromReadingList, readingList} = useReadingList()
    const books = getBooks()

    const getGenres = () => {
        const genres =  ['Todos']
        books.map(book => {
            if(!genres.some(genre => genre === book.genre)) {
                genres.push(book.genre)
            }
        })
        return genres
    }
    
    const handdleReadingList = (book, action) => {
        if(action === 'add') {
            addToReadingList(book)
        }
        if(action === 'remove') {
            removeFromReadingList(book)
        }
    }
    
    const renderBooks = () => {
        return filter != 'Todos' ? [...books].filter(book => book.genre === filter) : books
    }

    const renderReadingList = () => {
        return filter != 'Todos' ? [...readingList].filter(book => book.genre === filter) : readingList
    }

    const availableBooks = () => {
        return books.length - readingList.length
    }

    return {books: renderBooks(), availableBooks: availableBooks(), readingList: renderReadingList(), handdleReadingList, genres: getGenres()}
}