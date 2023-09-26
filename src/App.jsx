import { useState } from 'react'
import { useBooks } from './hooks/useBooks'
import { Books } from './components/Books'
import { ReadingList } from './components/ReadingList'

function App() {
  const [filter, setFilter] = useState('Todos')
  const {books, availableBooks, readingList, handdleReadingList, genres} = useBooks({filter})

  const updateFilter = (e)  => {
    e.preventDefault()
    setFilter(e.target.value)
  }
  return (
    <div className='page'>
        <header>
          <h1>List Of Books</h1>
          <h2>{availableBooks} libros disponibles</h2>
          <h3>{readingList.length} en la lista de lectura</h3>
          <form>
            
            <select id='filter' onChange={updateFilter}>
              {
                genres.map(genre => (
                  <option value={genre} key={genre}>{genre}</option>
                ))
              }
            </select>
          </form>
        </header>
      <main>
        <Books books={books} readingList={readingList} handdleReadingList={handdleReadingList} />
      <aside>
        <h2>Lista de Lectura</h2>
        {readingList != '' 
        ? <ReadingList readingList={readingList} handdleReadingList={handdleReadingList}/> 
        : <p>Agregue libros a la lista de lectura.</p>}
      </aside>
      </main>
    </div>
  )
}

export default App
