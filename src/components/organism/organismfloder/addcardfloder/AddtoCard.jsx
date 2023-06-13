import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./addtocard.css";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
 

import {
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../../../features/cartSlice";

const AddtoCard = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <>
  
            {/* sideadd to card bar */}
            <div className="cardbody">
        <div className="sidecard">
          <h1 className="slideheader">
            Total Quality
            <span style={{ fontSize: "2rem" }}>{totalQuantity}</span>
          </h1>
          <h2 className=" slidetotal">
            Total amount
            <span style={{ fontSize: "2rem" }}>{totalPrice}</span>
          </h2>
          <button className="slidebutton">Go To Check Out</button>
        </div>
        {/* end side add to card bar */}

        {/* total list starts */}

        <h2 className="totalheading"> Total Items :{cart.length}</h2>
        {cart.map((data, id) => (
          <div className="row" key={id}>
            <img className="rowimg" src={data.productImage} alt="img" />
            <DeleteIcon
              style={{ color: "red" }}
              onClick={() => dispatch(removeItem(data.id))}
            />

            <h2>{data.productName}</h2>

            <div className="datafavdet">
              <AddIcon
                className="icon"
                onClick={() => dispatch(increaseItemQuantity(data.id))}
              />
              <input
                name=" quantity"
                value={data.quantity}
                onChange={() => null}
              />

              <RemoveIcon
                className="icon"
                onClick={() => dispatch(decreaseItemQuantity(data.id))}
              />
            </div>
           
          </div>
        ))}
           
      </div>
      {/* total list ends */}
  
 
 
    
 
    </>
        
  );
};

export default AddtoCard;
