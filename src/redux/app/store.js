import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todos/todoSlice'
import randomnumberReducer from '../features/randomnumber/randomnumberSlics'
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    randomnumber: randomnumberReducer,
  },
})