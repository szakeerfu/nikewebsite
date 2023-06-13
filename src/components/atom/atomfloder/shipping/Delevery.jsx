import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReplayIcon from "@mui/icons-material/Replay";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import './Devliry.css';
 
 

const FreeDelevery = () => {
  return (
    <div className=" deleverymain">
        <div className="sectionmain">
        <div className="cardsection"> 
        <LocalShippingIcon />
        FREE SHIPPING
      </div>
      <div className="cardsection">
        <ReplayIcon />
        FREE RETURNS
      </div>
      <div className="cardsection">
        <QuestionMarkIcon />
        CUSTOMER SUPPORT
      </div>

        </div>
 
    </div>
  );
};

export default FreeDelevery;
