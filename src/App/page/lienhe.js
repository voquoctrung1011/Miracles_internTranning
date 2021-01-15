import React from 'react';

import { AppProvider } from '../../AppContext'
import Menu from '../layouts/gioithieu/menu'
import Lienhe from '../layouts/lienhe/lienhe'
import Footer from '../layouts/gioithieu/footerAbout'
import Test from '../layouts/mainPage/test'



function Connect() {


    return (
        <div className="lienhe">
                <Menu />
                <Lienhe />
                <Footer />
                
                {/* <Test/> */}

        </div>
    );
}

export default Connect;