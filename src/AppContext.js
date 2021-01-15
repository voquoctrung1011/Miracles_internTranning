import React, { useState} from 'react';
import Product1 from "./assets/images/product_1.png";
import Product2 from "./assets/images/product_2.png";
import Product3 from "./assets/images/product_3.png";
import Product4 from "./assets/images/product_4.png";
import Product5 from "./assets/images/product_5.png";
import Product6 from "./assets/images/product_6.png";
import Product9 from "./assets/images/product_9.png";
const AppContext = React.createContext();

const AppProvider = (props) => {

    const [cart, setCart] = useState([
        {
          id: "",
          title: "",
          name: "",
          price: "",
          img: "",
        //   units: 0
        }
      ])

    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Home",
            name: "Mỹ phẩm châu âu",
            price: "350.000",
            img: Product1
        },
        {
            id: 2,
            title: "Company",
            name: "Mỹ phẩm châu myx",
            price: "350.000",
            img: Product2
        },
        {
            id: 3,
            title: "Company",
            name: "Mỹ phẩm châu phi",
            price: "350.000",
            img: Product3
        },
        {
            id: 4,
            title: "Company",
            name: "Mỹ phẩm châu doc",
            price: "350.000",
            img: Product4
        },
        {
            id: 5,
            title: "Company",
            name: "Mỹ phẩm châu tinh tri",
            price: "350.000",
            img: Product5
        },
        {
            id: 6,
            title: "Company",
            name: "Mỹ phẩm châu dai duong",
            price: "350.000",
            img: Product6
        },
        {
            id: 7,
            title: "Company",
            name: "Mỹ phẩm châu my la tinh ",
            price: "350.000",
            img: Product9
        },  
    ]);

    return (
        <AppContext.Provider value = {{products, setProducts, cart, setCart}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
export { AppProvider }
