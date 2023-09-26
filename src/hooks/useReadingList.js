import { initialState, readingListReducer } from "../reducers/readinglist";
import { useReducer } from "react"

export function useReadingList() {
    const [state, dispatch] = useReducer(readingListReducer, initialState)

    const addToReadingList = (book) => dispatch({
        type: 'addToReadingList',
        payload: book
    })

    const removeFromReadingList = (book) => dispatch({
        type: 'removeFromReadingList',
        payload: book
    })

    return {addToReadingList, removeFromReadingList, readingList: state}
}