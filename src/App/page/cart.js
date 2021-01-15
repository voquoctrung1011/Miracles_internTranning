import React, {useContext} from 'react';

import Menu from '../layouts/gioithieu/menu'
import Cart from '../layouts/cart/cartProduct'
import Footer from '../layouts/gioithieu/footerAbout'
import Test from '../layouts/mainPage/test'

import {AppProvider} from '../../AppContext'


function CartProducts() {


    return (
        <div className="cart">
            <AppProvider>
                <Menu />
                <Cart />
                <Footer />
            </AppProvider>
           
        </div>
    );
}

export default CartProducts;