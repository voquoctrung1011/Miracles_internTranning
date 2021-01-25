import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import AppContext from '../../../AppContext';

import { Container, Table } from 'reactstrap';
import { Tag, Button, Popconfirm, Result, Menu, Dropdown, Spin } from 'antd';


import Plus from "../../../assets/images/add.png";
import Minus from "../../../assets/images/minus.png"
import Heart from "../../../assets/images/heart.png";
import Reload from "../../../assets/images/reload.png";



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
    const [inputValues, setInputValues] = useState({ strSearch: '', sortType: '', sortOrder: '' })
    const [loading, setLoading] = useState(false);


    //Button Clear
    const handleClear = () => {

        setInputValues({ strSearch: '' });
    }

    //Search Name products
    const onSearch = (strSearch) => {

        let sourceArray = cart;
        let newArray = [];
        if (strSearch.length <= 0) {
            newArray = sourceArray;
        } else {
            strSearch.toLowerCase();
            for (let item of sourceArray) {
                let sumPrice = item.sumPrice.toString();
                if (item.name.toLowerCase().indexOf(strSearch) > -1) {
                    console.log(typeof (sumPrice));
                    newArray.push(item);
                }
            }
        }
        setCart([...newArray])
        setInputValues({
            strSearch: strSearch
        });
    }

    //Sort price products
    const onSort = (sortType, sortOrder) => {

        let items = cart;
        if (sortOrder !== '' && sortType !== '') {
            let value = `${sortType}-${sortOrder}`;
            switch (value) {
                default:
                    break;
                case "price-asc":
                    items.sort(compareValues('price', 'asc'));
                    break;
                case "price-desc":
                    items.sort(compareValues('price', 'desc'));
                    break;
            }
            setCart([...items])
            setInputValues({
                sortType: sortType,
                sortOrder: sortOrder
            });
        }
    }

    const compareValues = (key, order = 'asc') => {

        return function (a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                return 0;
            }
            const priceA = a[key];
            const priceB = b[key];
            let comparison = 0;
            if (priceA > priceB) {
                comparison = 1;
            } else if (priceA < priceB) {
                comparison = -1;
            }
            return (
                (order == 'desc') ? (comparison * -1) : comparison
            );
        };
    }

    let sumCount = 0;
    let totalPrice = 0;
    cart.forEach((item, index) => {
        sumCount += item.count;
        totalPrice += item.sumPrice;
    });

    //Set lai name khi sort
    const value =[-1, 0 ,1];
    const sortName = (confirm) => {
        switch (confirm) {
            case -1:
                return 'Ascending';
            case 0:
                return 'Sort ';
            case 1:
                return 'Descending';
        }
    };
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a onClick={() => onSort('price', 'asc')}>{sortName(-1)}</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a onClick={() => onSort('price', 'desc')}>{sortName(1)}</a>
            </Menu.Item>
        </Menu>
    );

    const reloadPage = () =>{
        window.location.reload();
        setLoading(true)
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
                            <p className="giohang"> Your Cart</p>
                            {loading && (<Spin tip="is loading" style={{position:'fixed',textAlign:'center',left:'50rem'}} size="large" />)}
                            <div className="search-formm">
                                <input
                                    type="text"
                                    // name='strSearch'
                                    value={inputValues.strSearch}
                                    placeholder='Search products........'
                                    onChange={(event) => onSearch(event.target.value)}
                                />
                                <div className="button-searchh">
                                    <Dropdown overlay={menu} trigger={['click']}>
                                        <button className="btn-searchh" type='button'>{sortName(0)}</button>
                                    </Dropdown>
                                    <button onClick={handleClear} className="btn-clearr" type='button'>Clear</button>
                                </div>
                            </div>
                            {showResult && (
                                <>
                                    <Result
                                        style=
                                        {{
                                            zIndex: '2',
                                            position: 'fixed',
                                            backgroundColor: '#F0FFFF',
                                            width: '45rem',
                                            marginLeft: '200px',
                                            boxShadow: '20px 20px 50px grey'
                                        }}
                                        status="success"
                                        title={"You have bought " + sumCount + " products"}
                                        subTitle={"The total of price you need to pay is " + totalPrice + "$"}
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
                                                <td style={{ fontFamily: "utm-viceroyJF", fontSize: '25px' }}>{itemProduct.name}</td>
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
                                                color: '#7ba12d',
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
                                    <Button 
                                    type="primary" 
                                    shape="circle"
                                    onClick={reloadPage}
                                    >
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