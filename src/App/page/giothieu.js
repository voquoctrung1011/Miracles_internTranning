import React from 'react';

import Menu from '../layouts/gioithieu/menu'
import BodyAbout from '../layouts/gioithieu/body'
import Footer from '../layouts/mainPage/footer'
import Test from '../layouts/mainPage/test'

import {AppProvider} from '../../AppContext'


function GioiThieu() {

    return (
        <div className="gioithieu">
            <AppProvider>
                <Menu />
                <BodyAbout />
                <Footer />
                {/* <Test/> */}
            </AppProvider>
           
        </div>
    );
}

export default GioiThieu;