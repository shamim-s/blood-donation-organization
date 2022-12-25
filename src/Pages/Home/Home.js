import React from 'react';
import Spinner from '../../components/Spinner/Spinner';
import Footer from '../../Shared/Footer';
import AllDonor from './AllDonor';
import BloodCategory from './BloodCategory';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Hero/>
            <BloodCategory/>
            <AllDonor/>
            <Footer/>
        </div>
    );
};

export default Home;