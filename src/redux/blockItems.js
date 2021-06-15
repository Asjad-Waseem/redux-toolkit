import { createSlice } from '@reduxjs/toolkit';
import data from '../data/data.json';

export const blockItemsSlice = createSlice({
  name: 'items',
  initialState: {
    blockItems: data,
    updateBlockText: "",
  },
  reducers: {
    updateBlockText: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    //   state.blockItems = 1

    state.blockItems.row[3].column[action.payload.columnIndex].id(action.payload.columnId).text = state.blockItems.row[3].column[action.payload.columnIndex].id(action.payload.columnData.id).text(action.payload.text)
    },

  },
})

// Action creators are generated for each case reducer function
export const { updateBlockText } = blockItemsSlice.actions

export default blockItemsSlice.reducer