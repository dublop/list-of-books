export function ReadingList({readingList, handdleReadingList}) {
    return (
      <ul>
        {
          readingList.map(list => (
            <li key={list.id}>
              <img onClick={()=>handdleReadingList(list, 'remove')} src={list.cover} alt={list.title}/>
            </li>
          ))
        }
      </ul>
    )
}