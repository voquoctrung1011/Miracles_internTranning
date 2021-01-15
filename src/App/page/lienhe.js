import React from 'react';

import { AppProvider } from '../../AppContext'
import {  BackTop } from 'antd';

import Menu from '../layouts/gioithieu/menu'
import Lienhe from '../layouts/lienhe/lienhe'
import Footer from '../layouts/gioithieu/footerAbout'
import Test from '../layouts/mainPage/test'



function Connect() {

    const style = {
        height: 40,
        width: 100,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: 'black',
        color: '#fff',
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold'
      };

    return (
        <div className="lienhe">
                <Menu />
                <Lienhe />
                <Footer />
                <BackTop>
                    <div style={style}>UP</div>
                </BackTop>
                {/* <Test/> */}

        </div>
    );
}

export default Connect;