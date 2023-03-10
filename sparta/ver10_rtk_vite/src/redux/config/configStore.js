import { configureStore } from '@reduxjs/toolkit'
import todos from '../modules/todoModule'

export const store = configureStore({
  reducer: {
    todos,
  },
})