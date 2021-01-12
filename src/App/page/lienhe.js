import React from 'react';
import Menu from '../layouts/gioithieu/menu'
import Lienhe from '../layouts/lienhe/lienhe'
import Footer from '../layouts/gioithieu/footerAbout'
import Test from '../layouts/mainPage/test'

import { AppProvider } from '../../AppContext'


function Connect() {

    return (
        <div className="lienhe">
            <AppProvider>
                <Menu />
                <Lienhe />
                <Footer />
                {/* <Test/> */}
            </AppProvider>

        </div>
    );
}

export default Connect;