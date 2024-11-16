import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todos/todoSlice'
import randomnumberReducer from '../features/randomnumber/randomnumberSlics'
// import  fetchdataReducer from '../features/fetchdata/fetchdata'
import fetchdataReducer from '../features/fetchdata/fetchdataSlice'
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    randomnumber: randomnumberReducer,
    // fetchdata : fetchdataReducer,
    fetchdata: fetchdataReducer
  },
})