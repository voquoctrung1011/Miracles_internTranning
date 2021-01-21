import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import AppContext from '../../../AppContext';

import { Container, Table } from 'reactstrap';
import { Tag, Button } from 'antd';


import Plus from "../../../assets/images/add.png";
import Minus from "../../../assets/images/minus.png"
import Heart from "../../../assets/images/heart.png";
import Reload from "../../../assets/images/reload.png";
import Search from "../../../assets/images/search.png";



const Cart = (props) => {

    const {
        cart,
        setCart,
        products,
        setProducts,
        onDelete,
        onMinus,
        onPlus
    } = useContext(AppContext);
    const [inputValues, setInputValues] = useState({
        strSearch: '',
    })
    let items = [];


    const handleSearch = () => {
        cart = cart.filter((item) => {
            return item.price.toLowerCase().indexOf(inputValues.strSearch.toLowerCase()) !== -1;
        });

        if (inputValues.strSearch) {
            cart = cart.filter((item) => {
                return item.price.toLowerCase().indexOf(inputValues.strSearch.toLowerCase()) !== -1
            });
        }
    }

    const handleClear = () => {
        setInputValues({ strSearch: '' });
    }

    const handleChange = (event) => {
        setInputValues({
            strSearch: event.target.value,
        });
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
                            <div className="search-formm">
                                <input type="text" name='strSearch' value={inputValues.strSearch} placeholder='Search products........' onChange={handleChange} />
                                <div className="button-searchh">
                                    <button onClick={handleClear} className="btn-clearr" type='button'>Clear</button>
                                    <button onClick={() => handleSearch} className="btn-searchh" type='button'>Search</button>
                                </div>
                            </div>
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
                                    {cart.map((itemProduct, index) => (
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
                                                        onClick={() => onPlus(itemProduct, index)}
                                                    />
                                                    <p
                                                        style={{ paddingTop: '5px' }}
                                                    >
                                                        {itemProduct.count}
                                                    </p>

                                                    <img
                                                        style={{ width: '20px', height: '20px', marginBottom: '5px' }}
                                                        src={Minus}
                                                        onClick={() => onMinus(itemProduct, index)}
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
                            <div className="button--">
                                <div className="button-pricee">
                                    <Button
                                        type="primary">
                                        Mua hàng
                                            </Button>
                                </div>
                                <div className="button-heartt">
                                    <Button type="primary" shape="circle">
                                        <img src={Heart}></img>
                                    </Button>
                                </div>
                                <div className="button-reloadd">
                                    <Button type="primary" shape="circle">
                                        <img src={Reload}></img>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Cart;