import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Datas from "../../../../Product";
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { useNavigate } from "react-router-dom";
import Fotter from "../../../atom/atomfloder/Fotter"

import "./Collection.css";

const images = [
  " https://img.freepik.com/free-vector/fashion-sale-banner-template_1361-1577.jpg?w=1060&t=st=1685787235~exp=1685787835~hmac=ac3787e8de37a30f431e47119e0835132e4ab2065d7a50b8e676dc3e774b5b9f",
  "https://img.freepik.com/free-vector/modern-sale-banner-with-product_1361-1636.jpg?w=1060&t=st=1685787286~exp=1685787886~hmac=07c4c3f8f79e5886abb9cfa97dc52097f9b4cf3162cd27137d67e715cc823877",
  "  https://img.freepik.com/free-vector/modern-black-friday-sale-banner-template-with-3d-background-red-splash_1361-1877.jpg?w=1380&t=st=1685787377~exp=1685787977~hmac=3b8cbd1d5eed61466d6c2cde418335c814a21ce0a95c579ca968df8d593e73c6",
  "https://img.freepik.com/free-vector/sale-banner-with-product-description_1361-1333.jpg?w=1060&t=st=1685786730~exp=1685787330~hmac=22f633edeeb19c29df353368b97a9f244260301c74d2ccb9ccac132a7b620e2b",
  "https://img.freepik.com/free-vector/modern-sale-banner-template-with-fluid-shapes_1361-1389.jpg?w=1060&t=st=1685787491~exp=1685788091~hmac=51f5942e35323eab29e13c744bdfa1417e62a9f423be42915bd98a25450a1755",
  " https://img.freepik.com/free-vector/modern-sale-background-with-product-description_1361-1784.jpg?w=1060&t=st=1685787730~exp=1685788330~hmac=eea067962843d1e420de18e9a959de075e51d38e796c217e98594160ece1b837",
];
const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: "ease-in",
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.5,
      transition: "ease-in",
 
    };
  },
};

const Collection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const navigate = useNavigate();


  function nextStep() {
    setDirection(1);
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  }
  return (
    <>
      <div className=" containercollection">
        <div className="slideshow">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              variants={variants}
              animate="animate"
              initial="initial"
              exit="exit"
              src={images[index]}
              alt="slides"
              className="slides"
              key={images[index]}
              custom={direction}
            />
          </AnimatePresence>
          <button className="prevButton" onClick={prevStep}>
            ◀
          </button>
          <button className="nextButton" onClick={nextStep}>
            ▶
          </button>
        </div>
      </div>

      <div className="maindiv">
        {Datas.map((e) => {
          return (
            <div className="glassBox">
              <div className="glassBox__imgBox">
                <img src={e.productImage} alt="img" />
              </div>
              <h2 className="glassBox__title">{e.productName}</h2>
              
              <div onClick={() => navigate("/store")}  className="collectionshop">
              <ShoppingCartSharpIcon

              />

              </div>
 

 
            </div>
          );
        })}
      </div>
      <br>
      </br>
      <Fotter/>
    </>
  );
};

export default Collection;
