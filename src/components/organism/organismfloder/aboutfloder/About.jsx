import React from "react";
import BannerPoster from "../../../../Images/bannerposterjpg.jpg";

import Collection from "../../../../Images/stunning co1.avif";
import Collection1 from "../../../../Images/stunning happy.jpg";
import "./About.css";

import Team1 from "../../../../Images/team no1.jpg";
 import FreeDelevery from "../../../atom/atomfloder/shipping/Delevery";
 import Fotter from '../../../atom/atomfloder/Fotter'
 

const About = () => {
  return (
    <>
      <div className="mainsection">
        <div className="imageposter">
          <h1 className="aboutheading">
            <span>a</span> bout-US
          </h1>
          <img className="posterimg" src={BannerPoster} alt="" srcset="" />
        </div>

        <div className="aboutmain">
          <div className="stunningcollection">
            <h1 className="stunningcollection_h1"> STUNNING COLLECTION </h1>
            <div className="datareview">
              <div className="imgabout">
                <div className="background_color"></div>
                <img className="image" src={Collection} alt="" />
              </div>
              <div className="datastunnig">
                <h2 className="datastunnig_h2">SOAR INTO THE SKY</h2>
                <p className="datastunnig_p">
                  Quisque volutpat mattis eros. Nullam malesuada erat ut ki
                  diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra
                  non, semper suscipit, posuere a, pede. Donec nec justo eget
                  felis facilisis fermentum. Morbi in sem quis dui placerat
                  ornare. Pellentesque odio nisi, euismod in, pharetra a,
                  ultricies in, diam. Sed arcu. Cras consequat
                </p>
              </div>
            </div>
          </div >
          {/* second colum */}
          <div className="stunningcollection">
            <div className="datareview">
              <div className="datastunnig">
                <h2 className="datastunnig_h2"> LEARN TO ENJOY</h2>
                <p className="datastunnig_p">
                  Quisque volutpat mattis eros. Nullam malesuada erat ut ki
                  diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra
                  non, semper suscipit, posuere a, pede. Donec nec justo eget
                  felis facilisis fermentum. Morbi in sem quis dui placerat
                  ornare. Pellentesque odio nisi, euismod in, pharetra a,
                  ultricies in, diam. Sed arcu. Cras consequat
                </p>
              </div>

              <div className="imgabout">
                <div className="background_color"></div>
                <img
                  className="image"
                  src={Collection1}
                  alt=""
                  height={"100%"}
                />
              </div>
            </div >
            {/* team///////////////////////////////////////////////////// */}
            <div style={{ marginTop:"14rem"}}>
            <h1 className="teamingheading">  Meet Our  Team</h1>
              <div className="mainteam">
                
                <div className="subteam">
                 
                  <img
                    className="teamimag"
                    src={Team1}
                    alt=""
                    srcset=""
                    
                  />
                  <h2>Elizabeth Graham</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae aut minima nihil sit distinctio recusandae doloribus
                    ut fugit officia voluptate soluta.
                  </p>
                </div>
                <div  className="subteam">
                  <img
                    className="teamimag"
                    src={Team1}
                    alt=""
                    srcset=""
                    
                  />
                  <h2>Elizabeth Graham</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae aut minima nihil sit distinctio recusandae doloribus
                    ut fugit officia voluptate soluta.
                  </p>
                </div>
                <div  className="subteam">
                  <img
                    className="teamimag"
                    src={Team1}
                    alt=""
                    srcset=""
                   
                  />
                  <h2>Elizabeth Graham</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae aut minima nihil sit distinctio recusandae doloribus
                    ut fugit officia voluptate soluta.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <FreeDelevery/> 
          <br />
          < Fotter />
      
        </div>
       
      </div>
     
    </>
  );
};

export default About;
