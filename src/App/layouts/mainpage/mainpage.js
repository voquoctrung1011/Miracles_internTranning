import React from 'react';
import HeaderMenu from '../HeaderMenu'
import Bodyinfo from '../bodyInfo'
import Slide from '../slider'
import ProductDemo from '../productDemo'
import RateUs from '../rateus'
import Footer from '../footer'




function MainPage() {
    return (
        <div className="mainpage">
            <HeaderMenu />
            <Bodyinfo />
            <Slide />
            <ProductDemo />
            <RateUs />
            <Footer />
        </div>
    );
}

export default MainPage;