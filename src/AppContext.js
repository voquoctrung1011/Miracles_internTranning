import React, { useState} from 'react';

import {  notification } from 'antd';

import Product1 from "./assets/images/product_1.png";
import Product2 from "./assets/images/product_2.png";
import Product3 from "./assets/images/product_3.png";
import Product4 from "./assets/images/product_4.png";
import Product5 from "./assets/images/product_5.png";
import Product6 from "./assets/images/product_6.png";
import Product9 from "./assets/images/product_9.png";


const AppContext = React.createContext();

const AppProvider = (props) => {

    let task = JSON.parse(localStorage.getItem('cart'));
    const [cart, setCart] = useState(task);
    
    const onDelete =  (item) => {

        const indexProduct = cart.findIndex(p => p.id === item.id);
        if (indexProduct < 0) return;

        const newProduct = [...cart];
        newProduct.splice(indexProduct, 1);
        setCart(newProduct);
        localStorage.setItem('cart', JSON.stringify(cart));
        notification.success({
            message: "Delete Table",
            description: "Deleted" + " " + item.name + " " + " success ",
            duration: '0.5',
        });
    }

    const onPlus = (item, index) => {

        item.count = item.count + 1;
        item.sumPrice = item.price * item.count;
        localStorage.setItem('cart', JSON.stringify(cart));
        setCart([...cart]);
    }

    const onMinus = (item, index) => {
        if (item.count <= 0){
            onDelete(item);
            console.log(item)
        }
        else{
            item.count = item.count - 1;
            item.sumPrice = item.sumPrice - item.price;
            localStorage.setItem('cart', JSON.stringify(cart));
            setCart([...cart])
        }
    }

    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Home",
            name: "Mỹ phẩm châu âu",
            price: 350,
            count:1,
            sumPrice:350,
            img: Product1
        },
        {
            id: 2,
            title: "Company",
            name: "Nước hoa châu myx",
            price: 999,
            count:1,
            sumPrice:999,
            img: Product2
        },
        {
            id: 3,
            title: "SapotaCorp",
            name: "BB Cream",
            price: 25,
            count:1,
            sumPrice:25,
            img: Product3
        },
        {
            id: 4,
            title: "Micrales",
            name: "Thuốc trị mụn amisa",
            price: 1011,
            count:1,
            sumPrice:1011,
            img: Product4
        },
        {
            id: 5,
            title: "OrienSoftware",
            name: "Mỹ phẩm châu tinh tri",
            price: 150,
            count:1,
            sumPrice:150,
            img: Product5
        },
        {
            id: 6,
            title: "Datahouse",
            name: "Bình xịt khoáng mini",
            price: 4000,
            count:1,
            sumPrice:4000,
            img: Product6
        },
        {
            id: 7,
            title: "FptSoftware",
            name: "Nước hoa khô cho nam ",
            price: 3450,
            count:1,
            sumPrice:3450,
            img: Product9
        },  
    ]);


    return (
        <AppContext.Provider value = {{products, setProducts, cart, setCart, onDelete, onMinus, onPlus}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
export { AppProvider }
