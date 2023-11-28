import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../Features/CartSlice'

 const store = configureStore({
    reducer:{
           CartReducer
    }
})
export default store
