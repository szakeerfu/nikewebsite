import React from "react";
import  { useState } from "react";
 
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import people from "../data";
import '../review/Review.css'
 

 

const Review = () => {
    const [index, setIndex] = useState(0);
    const { id, name, job, image, text } = people[index];
    const checknumber = (number) => {
        if (number > people.length - 1) {
          return 0;
        }
      
        if (number < 0) {
          return people.length - 1;
        }
      
        return number;
      };
      
      const prevPerson = () => {
        setIndex((index) => {
          let numberPerson = index + 1;
          return checknumber(numberPerson);
        });
      };
      
      const nextPerson = () => {
        setIndex((index) => {
          let numberPerson = index - 1;
          return checknumber(numberPerson);
        });
      };
      
      const randomPerson = () => {
        let numberRandom = Math.floor(Math.random() * (people.length - 1));
        if (numberRandom === index) {
          numberRandom = numberRandom + 1;
        }
        console.log(numberRandom);
        return setIndex(numberRandom);
      };
  return (
    <main>
      <section className="reviwcontainer">
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>

        <article className="review">
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
 
          </div>

          <h4 className="author">{name}</h4>
       
          <p className="info">{text}</p>

          <div className="button-container">
            <button className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft />
            </button>

            <button className="next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>

          <button className="random-btn" onClick={randomPerson}>
            Check the Review
          </button>
        </article>
      </section>
    </main>
  );
};

export default Review;
