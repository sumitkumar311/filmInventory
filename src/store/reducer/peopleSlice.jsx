import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  info: null,
}

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    loadInfo: (state, action) => {
        state.info = action.payload
    },
    resetInfo: (state) => {
        state.info = null
    },
    // add other reducers here if needed

    
  },
})


export const { loadInfo, resetInfo } = peopleSlice.actions

export default peopleSlice.reducer