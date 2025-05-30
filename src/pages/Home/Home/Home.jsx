import React from 'react';
import Banner from '../Banner/Banner';
// import Card from '../Card/Card';
import LatestProducts from '../LatestProducts/LatestProducts';
import PopularCategories from '../PopularCategories/PopularCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Card></Card> */}
            <PopularCategories></PopularCategories>
            <LatestProducts></LatestProducts>
        </div>
    );
};

export default Home;