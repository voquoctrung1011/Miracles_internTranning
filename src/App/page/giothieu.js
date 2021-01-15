import React from 'react';

import {  BackTop } from 'antd';
import {AppProvider} from '../../AppContext'

import Menu from '../layouts/gioithieu/menu'
import BodyAbout from '../layouts/gioithieu/body'
import Footer from '../layouts/gioithieu/footerAbout'
import Test from '../layouts/mainPage/test'




function GioiThieu() {

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
        <div className="gioithieu">
            <AppProvider>
                <Menu />
                <BodyAbout />
                <Footer />
                {/* <Test/> */}
                <BackTop>
                    <div style={style}>UP</div>
                </BackTop>
            </AppProvider>
           
        </div>
    );
}

export default GioiThieu;