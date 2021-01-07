import React from 'react';
import HeaderMenu from '../HeaderMenu'
import Bodyinfo from '../bodyInfo'
import Slide from '../slider'
import ProductDemo from '../productDemo'




function MainPage() {
    return (
        <div className="mainpage">
            <HeaderMenu />
            <Bodyinfo />
            <Slide />
            <ProductDemo />
        </div>
    );
}

export default MainPage;