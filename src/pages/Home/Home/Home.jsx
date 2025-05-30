import React from 'react';
import Banner from '../Banner/Banner';
// import Card from '../Card/Card';
import LatestProducts from '../LatestProducts/LatestProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Card></Card> */}
            <LatestProducts></LatestProducts>
        </div>
    );
};

export default Home;