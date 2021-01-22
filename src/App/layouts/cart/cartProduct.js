import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import AppContext from '../../../AppContext';

import { Container, Table } from 'reactstrap';
import { Tag, Button, Popconfirm, Result, Alert, notification } from 'antd';


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
    const [showResult, setShowResult] = useState(false);
    const [inputValues, setInputValues] = useState({ strSearch: '', })


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

    let sumCount = 0;
    let totalPrice = 0;
    cart.forEach((item, index) => {
        sumCount += item.count;
        totalPrice += item.sumPrice;
    });



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
                            {showResult && (
                                <>
                                    <Result
                                        style={{ zIndex: '2', position: 'fixed', backgroundColor: '#F0FFFF', width: '45rem', marginLeft: '200px', boxShadow: '20px 20px 50px grey' }}
                                        status="success"
                                        title={"You have bought " + sumCount + " products"}
                                        subTitle={"The price you need to pay is " + totalPrice + "$"}
                                        extra={[
                                            <Button type="primary" key="console">
                                                <NavLink exact to="/" style={{ textDecoration: 'none' }}>
                                                    Buy More
                                            </NavLink>
                                            </Button>,
                                            <Button key="buy" onClick={() => setShowResult(false)}>
                                                Close
                                        </Button>,
                                        ]}
                                    />
                                </>
                            )}
                            <Table bordered >
                                <thead style={{ backgroundColor: '#dee2e6' }}>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Number</th>
                                        <th>Sum Of Price</th>
                                        <th>Delete</th>
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
                                                <td style={{ fontFamily: "utm-viceroyJF", fontSize:'25px' }}>{itemProduct.name}</td>
                                                <td><Tag color='purple'>{itemProduct.price}$</Tag></td>
                                                <td>
                                                    <img
                                                        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                                                        src={Plus}
                                                        onClick={() => onPlus(itemProduct, index)}
                                                    />
                                                    <p
                                                        style={{ paddingTop: '5px' }}
                                                    >
                                                        {itemProduct.count}
                                                    </p>

                                                    <img
                                                        style={{ width: '20px', height: '20px', marginBottom: '5px', cursor: 'pointer' }}
                                                        src={Minus}
                                                        onClick={() => onMinus(itemProduct, index)}
                                                    />
                                                </td>
                                                <td>
                                                    <p className="price-table">{itemProduct.sumPrice}
                                                        <span>$</span>
                                                    </p>
                                                </td>
                                                <td>
                                                    <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
                                                        <Button
                                                            className="buttonDelete"
                                                            onClick={() => onDelete(itemProduct)}
                                                            danger
                                                        >Delete
                                                    </Button>
                                                    </Popconfirm>
                                                </td>
                                            </tr>
                                            <tr>
                                            </tr>
                                        </>
                                    ))}
                                </tbody>
                            </Table>
                            <Table bordered >
                                <thead >
                                    <tr style={{ fontFamily: "utm-viceroyJF", }}>
                                        <th
                                            style={{
                                                textAlign: 'left',
                                                fontSize: '30px',
                                            }}>
                                            Total
                                        </th>
                                        <th
                                            style={{
                                                width: '150px',
                                                fontSize: '29px',
                                                color:'#7ba12d',
                                            }}>
                                            <p>{totalPrice}<span>$</span></p>
                                        </th>
                                    </tr>
                                </thead>
                            </Table>
                            <div className="button--">
                                <div className="button-pricee">
                                    <Button
                                        onClick={() => setShowResult(true)}
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