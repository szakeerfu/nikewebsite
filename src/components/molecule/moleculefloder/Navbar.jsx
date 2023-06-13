import React from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../../../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <div className="navbar">
        <h3 className="logo">ShopVibe</h3>

        <div
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <Link to="/">Home</Link>
          <Link to="/Store">Store</Link>
          <Link to="/about"> about Us</Link>
          <Link to="/contact"> contact</Link>

          <div onClick={() => navigate("AddtoCard")} className="shopcard">
            <div
              style={{
                width: "5vw",
                backgroundColor: "  #d4ff36",
                padding: "4px",
                borderRadius: "22px",
                border: "none",
              }}
            >
              <LocalGroceryStoreOutlinedIcon style={{ marginLeft: "22px" }} />
              {totalQuantity}
            </div>
          </div>
        </div>

        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
