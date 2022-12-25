import React from 'react';
import Spinner from '../../components/Spinner/Spinner';
import Footer from '../../Shared/Footer';
import BloodCategory from './BloodCategory';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Hero/>
            <BloodCategory/>
            <Footer/>
        </div>
    );
};

export default Home;