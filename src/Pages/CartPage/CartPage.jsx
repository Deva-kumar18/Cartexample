import { useDispatch,useSelector } from "react-redux";
import { cart } from "../../Features/CartSlice";
import "./CartPage.css";
import UP from "../../images/uparrow.png";
import DOWN from "../../images/downarrow.png";
import Cart from '../../images/add-cart.png'
import { useState } from "react";


const CartPage = () => {
  const data = useSelector((state) => state.CartReducer.cart);
  const dispatch = useDispatch()
  const [amount, setAmount]= useState(0)
   var totalcount;

   const calulatAmount=()=>{
    var totalAmount=0;
    data.map((val,key)=>(
    totalAmount=totalAmount+val.totalAmount
    ))
    return totalAmount
   }
   
  

  return (
    <div className="cart">
      <div className="header"><img className="cart-ico" src={Cart}/></div>
      <div className="content">
        {data.map((val, key) => (
          <div className="cart-box">
            <ul key={val.id}>
              <div className="flex-data">
                <li>
                  <img className="img" src={val.image} />
                </li>
                <div className="product-details">
                  <li className="name">{val.name}</li>
                  <li className="price">{val.Price}</li>
                  <li>
                    <button className="rmv-btn">remove</button>
                  </li>
                </div>
                <div className="add">
                  <button className="btn" onClick={()=>dispatch(cart({count:val.count+1,key,opr:"add"}))}>
                    <img className="ico" src={UP} />
                  </button>
                  <div>{val.count}</div>
                  <button className="btn" onClick={()=>dispatch(cart({count:val.count-1,key,opr:"sub"}))}>
                    <img className="ico" src={DOWN} />
                  </button>
                </div>
              </div>
            </ul>
            
            
          </div>
           
        ))}
        
        <div className="total-part">
            
          <div>TotalCost</div>
          {calulatAmount()}
        </div>
      </div>

    </div>
  );
};

export default CartPage;
