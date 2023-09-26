import './Books.css'

export function Books({books, readingList, handdleReadingList}) {

  const renderBooks = (book) => {
    const bookInReadingList = readingList.some(list => list.title === book.title)

    return  <li key={book.id}>
      <img onClick={()=>handdleReadingList(book, 'add')} src={book.cover} alt={book.title} className={bookInReadingList ? 'readingList' : ''} />
      <h3>{book.title}</h3>
      </li>

}

  return (
      <ul className="books">
        {
          books.map(book => (
            renderBooks(book)
          ))
        }
      </ul>
  )
}