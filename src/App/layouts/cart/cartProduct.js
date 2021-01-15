import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../../AppContext';

import { Container, Table } from 'reactstrap';
import { Tag, notification, Button, BackTop } from 'antd';
import { BrowserRouter as NavLink } from "react-router-dom";



const Cart = (props) => {

    const { cart, setCart, products, setProducts } = useContext(AppContext);
    const [alert, setArlert] = useState(false)

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
                            <p>GIỎ HÀNG</p>
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
                                    {products.map(itemProduct => (
                                        <>
                                            <tr key={itemProduct.id}>
                                                <th
                                                >
                                                    <img
                                                        style={{ width: '150px', height: '150px' }}
                                                        src={itemProduct.img} />
                                                </th>
                                                <td>{itemProduct.name}</td>
                                                <td><Tag color='purple'>{itemProduct.price}</Tag></td>
                                                <td>1</td>
                                                <td>{itemProduct.price}</td>
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