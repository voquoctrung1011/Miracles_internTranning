import React from 'react';
import HeaderMenu from '../layouts/mainPage/HeaderMenu'
import Bodyinfo from '../layouts/mainPage/bodyInfo'
import Slide from '../layouts/mainPage/slider'
import ProductDemo from '../layouts/mainPage/productDemo'
import RateUs from '../layouts/mainPage/rateus'
import Footer from '../layouts/mainPage/footeMainpage'
import Test from '../layouts/mainPage/test'
import {AppProvider} from '../../AppContext'


function MainPage() {
    return (
        <div className="mainpage">
            <AppProvider>
                <HeaderMenu />
                <Bodyinfo />
                <Slide />
                <ProductDemo />
                <RateUs />
                <Footer />
                {/* <Test/> */}
            </AppProvider>
           
        </div>
    );
}

export default MainPage;