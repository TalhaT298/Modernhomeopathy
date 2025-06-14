import React from 'react';
import Banner from '../Banner/Banner';
// import Card from '../Card/Card';
import LatestProducts from '../LatestProducts/LatestProducts';
import PopularCategories from '../PopularCategories/PopularCategories';
import Specials from '../Specials/Specials';
import Marque from '../Marque/Marque';

const Home = () => {
    return (
        <div>
            <Marque></Marque>
            <Banner></Banner>
            {/* <Card></Card> */}
            <PopularCategories></PopularCategories>
            <LatestProducts></LatestProducts>
            <Specials></Specials>
        </div>
    );
};

export default Home;