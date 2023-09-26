export const initialState = JSON.parse(localStorage.getItem('reading-list-04')) || []

const updateLocalStorage = (state) => {
    localStorage.setItem('reading-list-04', JSON.stringify(state))
}

export function readingListReducer(state, action) {
    const {type, payload} = action
    const index = [...state].findIndex(item => item.title === payload.title)

    switch(type) {
        case 'addToReadingList': {
            if(index < 0) {
                const newReadingList = [...state]
                newReadingList.push(payload)
                updateLocalStorage(newReadingList)
                return newReadingList
            }else {
                return state
            }
            
        }
        case 'removeFromReadingList': {
            if(index >= 0) {
                const newReadingList = [...state].filter(item => item.title != payload.title)
                updateLocalStorage(newReadingList)
                return newReadingList
            }
            return
        }
        return state
    }
}