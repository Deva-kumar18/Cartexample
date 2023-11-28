import { createSlice } from "@reduxjs/toolkit";
import MACBOOK from '../images/macbook.png'
import IPHONE from '../images/Iphone15.png'
import HEADSET from '../images/headset.png'
import PROJECTOR from '../images/projector.png'
import PS5 from '../images/ps5.png'

const initialState = {
    cart:[{
        id:1,
        name:"MacBook Pro",
        image:MACBOOK,
        Price:'1000$',
    },
    {
        id:2,
        name:"Iphone 15pro",
        image:IPHONE,
        Price:'500$',
    },{
        id:3,
        name:"Headset",
        image:HEADSET,
        Price:'100$',
    },{
        id:4,
        name:"Projector",
        image:PROJECTOR,
        Price:'300$',
    },{
        id:5,
        name:"Ps5",
        image:PS5,
        Price:'200$',
    }]
} 

const cartSlice =  createSlice({
    name:'cartActions',
    initialState,
    reducers:{
          cart(state,action){
            
          },
          
    }
});
 
export const {cart} =cartSlice.actions
export default cartSlice.reducer

