import { createSlice } from "@reduxjs/toolkit";
import MACBOOK from "../images/macbook.png";
import IPHONE from "../images/Iphone15.png";
import HEADSET from "../images/headset.png";
import PROJECTOR from "../images/projector.png";
import PS5 from "../images/ps5.png";

const initialState = {
  cart: [
    {
      id: 1,
      name: "MacBook Pro",
      image: MACBOOK,
      Price: 1000,
      count: 1,
      totalAmount: 1000,
    },
    {
      id: 2,
      name: "Iphone 15pro",
      image: IPHONE,
      Price: 500,
      count: 1,
      totalAmount: 500,
    },
    {
      id: 3,
      name: "Headset",
      image: HEADSET,
      Price: 100,
      count: 1,
      totalAmount: 100,
    },
    {
      id: 4,
      name: "Projector",
      image: PROJECTOR,
      Price: 300,
      count: 1,
      totalAmount: 300,
    },
    {
      id: 5,
      name: "Ps5",
      image: PS5,
      Price: 200,
      count: 1,
      totalAmount: 200,
    },
  ],
};

const cartSlice = createSlice({
  name: "cartActions",
  initialState,
  reducers: {
    cart(state, action) {
      const { count, key, opr } = action.payload;

      console.log(count, key, opr);
      if (opr === "add") {
        state.cart[key].totalAmount = count * state.cart[key].Price;
        state.cart[key].count = count;
        if(state.cart[key].count==0){
            state.cart.splice(key,1)
        }
        
      } else {
        state.cart[key].totalAmount = count * state.cart[key].Price;
        state.cart[key].count = count;
      }
      
    },
    removeCart(state,action){
        const {key,opr}= action.payload
       
        
        state.cart.splice(key, 1);
    }
    
  },
});

export const { cart,removeCart } = cartSlice.actions;
export default cartSlice.reducer;
