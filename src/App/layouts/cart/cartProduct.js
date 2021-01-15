import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import AppContext from '../../../AppContext';

import { Container, Table } from 'reactstrap';
import { Tag, notification, Button } from 'antd';


import Plus from "../../../assets/images/add.png";
import Minus from "../../../assets/images/minus.png"



const Cart = (props) => {

    const { cart, setCart, products, setProducts } = useContext(AppContext);

    const onDelete = (product) => {

        const indexProduct = products.findIndex(p => p.id === product.id)
        if (indexProduct < 0) return;

        const newProduct = [...products];
        newProduct.splice(indexProduct, 1);
        setProducts(newProduct);
        notification.success({
            message: "Delete Table",
            description: "Deleted" + " " + product.name + " " + " success "
        });
        console.log(newProduct)
    }

    const onPlus = (item, index) =>{

        products[index].count = products[index].count + 1;
        products[index].sumPrice = products[index].price * products[index].count;

        setProducts([...products])
        console.log(products[index].count)
    }

    const onMinus = (item, index) => {
        if(item.count <= 0)
            return;
        else
            products[index].count = products[index].count - 1;
            products[index].sumPrice = products[index].sumPrice - products[index].price;
            setProducts([...products])
            console.log(products[index].count)
    }
    

    return (
        <>
            <Container>
                <div className="cartt">
                    <div className="cartt-container">
                        <div className="link">
                            <NavLink className="NavLink" exact to="/" >Home</NavLink>
                            <NavLink className="NavLink" exact to="/cart" >Cart</NavLink>
                        </div>
                        <div className="table-carts">
                            <p className="giohang">GIỎ HÀNG</p>
                            <Table bordered >
                                <thead style={{ backgroundColor: '#dee2e6' }}>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Number</th>
                                        <th>Sum Of Price</th>
                                        <th>Delect</th>
                                    </tr>
                                </thead>
                                <tbody style={{ overflowY: 'auto', height: '300px' }}>
                                    {products.map((itemProduct, index) => (
                                        <>
                                            <tr key={itemProduct.id}>
                                                <th
                                                >
                                                    <img
                                                        style={{ width: '150px', height: '150px' }}
                                                        src={itemProduct.img} />
                                                </th>
                                                <td>{itemProduct.name}</td>
                                                <td><Tag color='purple'>{itemProduct.price}$</Tag></td>
                                                <td>
                                                    <img
                                                        style={{ width: '20px', height: '20px' }}
                                                        src={Plus}
                                                        onClick={()=> onPlus( itemProduct, index)}
                                                    />
                                                    <p
                                                        style={{ paddingTop: '5px' }}
                                                    >
                                                        {itemProduct.count}
                                                    </p>

                                                    <img
                                                        style={{ width: '20px', height: '20px', marginBottom: '5px' }}
                                                        src={Minus}
                                                        onClick={()=> onMinus(itemProduct, index)}
                                                    />
                                                </td>
                                                <td>{itemProduct.sumPrice}$</td>
                                                <td>
                                                    <Button
                                                        onClick={() => onDelete(itemProduct)}
                                                        danger
                                                    >Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                            </tr>
                                        </>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Cart;