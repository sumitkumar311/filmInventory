import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from './reducer/peopleSlice'
import mediaReducer from './reducer/mediaSlice'

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    media: mediaReducer,
  },
})