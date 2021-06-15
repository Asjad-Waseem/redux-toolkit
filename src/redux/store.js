import { configureStore } from '@reduxjs/toolkit';
import blockItemsReducer from './blockItems';

export default configureStore({
  reducer: {

    blockItems: blockItemsReducer
    
  },
})