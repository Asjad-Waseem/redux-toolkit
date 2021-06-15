import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  priority: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateText(state) {
      state.counter++
    },
  }
})


const store = configureStore({
reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions

export default store;
