import React from "react";
import Banner1 from "../.././Images/6262-01.svg";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div className="hero bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Banner1} className="lg:w-1/2 rounded-lg shadow-2xl border-2 border-primary"/>
        <div>
          <h1 className="lg:text-5xl text-4xl lg:text-left text-center font-bold">
          <span className="text-primary">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Blood',]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </span>
         <span>     Donation Organization</span>
          </h1>
          <p className="py-6 lg:text-left text-center">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p className="lg:text-left text-center">
            <button className="btn btn-primary font-bold text-white">Donate Blood</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
