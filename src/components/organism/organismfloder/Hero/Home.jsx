import React, { useRef, useEffect } from "react";
import BackgroundImage from "../../../../Images/pngwing.com (5).png";

import CardImage from "../../../../Images/pngwing.com (1).png";
import CardImage1 from "../../../../Images/png.png";
import CardImage2 from "../../../../Images/pngwing.com (2).png";
import CardImage3 from "../../../../Images/pngwing.com (9).png";
import CardImage4 from "../../../../Images/pngwing.com (12).png";
import CardImage5 from "../../../../Images/pngwing.com (14).png";
import { useNavigate } from "react-router-dom";

import "./Home.css";
import { Link } from "react-router-dom";
import HorizontalScroll from "react-scroll-horizontal";
import Fotter from "../../../atom/atomfloder/Fotter";

const Home = ({ timeline }) => {
  //    refer by lline no 137
  const navigate = useNavigate();

  let bg = useRef(null);

  useEffect(() => {
    timeline.to(bg, {
      duration: 1,
      y: "-60%",
      x: "-50%",
      opacity: 1,
    });
  });

  return (
    <>
      <div div className="heroback">
        <div>
          <div className="content">
            <h1> SPORTS DAY Super SALE</h1>
            <p>
              <li style={{ listStyle: "none", textDecoration: "none" }}>
                <Link to="/Collection">New Arraivals</Link>
              </li>
            </p>
          </div>
          <img
            src={BackgroundImage}
            alt="bg"
            className="Background"
            ref={(el) => (bg = el)}
            style={{ marginTop: "-18rem", marginLeft: "47rem" }}
          />
        </div>

        {/*  next section start */}
        <div className="Collection">
          <h1>
            <span>B</span>rand COllection<span>N</span>
          </h1>
        </div>

        <div className="card">
          <HorizontalScroll>
            <div className="imagecard">
              <div
                className="cricle"
                style={{ backgroundColor: " red;" }}
              ></div>

              <img src={CardImage} alt="bg" />

              <div className="brandname"></div>
            </div>
            <div className="imagecard">
              <div
                className="cricle"
                style={{ backgroundColor: " #cf8e79" }}
              ></div>
              <img src={CardImage1} alt="bg" style={{ rotate: "-2deg" }} />
              <div className="brandname"></div>
            </div>
            <div className="imagecard">
              <div
                className="cricle"
                style={{ backgroundColor: "black" }}
              ></div>
              <img src={CardImage2} alt="bg" style={{ rotate: "-32deg" }} />
              <div className="brandname"></div>
            </div>
            <div className="imagecard">
              <div
                className="cricle"
                style={{ backgroundColor: " #d33739" }}
              ></div>
              <img src={CardImage3} alt="bg" style={{ rotate: "-2deg" }} />
              <div className="brandname"></div>
            </div>
            <div className="imagecard">
              <div
                className="cricle"
                style={{ backgroundColor: "  white" }}
              ></div>

              <img src={CardImage5} alt="bg" />
              <div className="brandname"></div>
            </div>

            <div className="imagecard">
              <div
                className="cricle"
                style={{ backgroundColor: " #001969" }}
              ></div>
              <img src={CardImage4} alt="bg" />
              <div className="brandname"></div>
            </div>

            <div className="imagecard">
              <div
                className="cricle"
                style={{ backgroundColor: "  white" }}
              ></div>

              <img src={CardImage5} alt="bg" />
              <div className="brandname"></div>
            </div>
          </HorizontalScroll>
        </div>
        <button onClick={() => navigate("/store")} className="addtocardbutton">
          Shop Now
        </button>

        {/* catagory shoes detail */}
        <div>
          <div div className="subdif">
            <div className="sq"></div>
            <div className="fq">
              <h2>GET UP TO 30% off</h2>
              <p>you can get up to 30% dicount form here</p>
            </div>

            <img src={CardImage1} alt="" />
          </div>
          <div className="data">
            <h1>
              WE PROVIDE <span>HIGHT QUALITY</span> SHOES
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              qui , iusto illum eaque quis vitae rem a reprehenderit quidem
              quaerat totam assumenda explicabo quod repudiandae dolor velit
              sapiente voluptatibus mollitia?
            </p>{" "}
          </div>
          <button
            onClick={() => navigate("/store")}
            className="addtocardbutton"
          >
            EXPLOR
          </button>
        </div>

        <div style={{ height: "100vh" }}>
          <div div className="subdif1">
            <div className="squ1"></div>
            <div className="fq1">
              <h2>GET UP TO 30% off</h2>
              <p>you can get up to 30% dicount form here</p>
            </div>

            <img src={CardImage4} alt="" />
          </div>
          <div className="data1">
            <h1>
              WE PROVIDE <span>HIGHT QUALITY</span> SHOES
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              qui , iusto illum eaque quis vitae rem a reprehenderit quidem
              quaerat totam assumenda explicabo quod repudiandae dolor velit
              sapiente voluptatibus mollitia?
            </p>{" "}
          </div>
          <button
            onClick={() => navigate("/store")}
            className="addtocardbutton1"
          >
            EXPLOR
          </button>
        </div>
      </div>
      
      <Fotter/>
    </>
  );
};

export default Home;
