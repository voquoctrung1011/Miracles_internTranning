import React from 'react';
import Menu from '../layouts/gioithieu/menu'
import Product from '../layouts/sanpham/products'
import Footer from '../layouts/gioithieu/footerAbout'
import Test from '../layouts/mainPage/test'

import { AppProvider } from '../../AppContext'


function Products() {

    return (
        <div className="products">
            <AppProvider>
                <Menu />
                <Product />
                <Footer />
                {/* <Test/> */}
            </AppProvider>

        </div>
    );
}

export default Products;