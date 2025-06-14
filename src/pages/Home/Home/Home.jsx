import React from 'react';
import Banner from '../Banner/Banner';
// import Card from '../Card/Card';
import LatestProducts from '../LatestProducts/LatestProducts';
import PopularCategories from '../PopularCategories/PopularCategories';
import Specials from '../Specials/Specials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Card></Card> */}
            <PopularCategories></PopularCategories>
            <LatestProducts></LatestProducts>
            <Specials></Specials>
        </div>
    );
};

export default Home;