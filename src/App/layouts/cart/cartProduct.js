import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../../AppContext';

import { Container } from 'reactstrap';
import { Table, Tag, Space, Button } from 'antd';
import { BrowserRouter as  NavLink } from "react-router-dom";




const Cart = () => {
    
    const  {cart, setCart, products, setProducts} = useContext(AppContext);

    const onDelete = (product) => {
        let itemProduct = [...products]
        itemProduct = product.splice(product.indexOf(product.id), 5);
        setProducts(itemProduct);
        console.log(product);
    }


    const columns = [
        {
            title: 'Image',
            dataIndex: 'img',
            width: 200
            // render: ()=>{console.log(products.img);
            //     return (
            //          <>
            //             {
            //                 products.map((item, key) => (
            //                     <img key={item.id} src={item.img}/> 
            //             ))}
            //          </>
            //     )}
          },
          {
            title: 'Product',
            dataIndex: 'name',
            width: 200
          },
          {
            title: 'Price',
            dataIndex: 'price',
            width: 100
          },
          {
            title: 'Number',
            dataIndex: 'number',
            width: 100
          },
          {
            title: 'Sum Of Price',
            dataIndex: 'sum',
            width: 100
          },
          {
            title: 'Delete',
            width: 100,
            render: () =>   <Button
                                onClick={()=> onDelete(products)}
                                danger
                            >Delete
                            </Button>,
          },
    ];

    const data = [];
    for(let i = 0; i<=products.length; i++){
        products.map((item ) =>
        data.push({
            key: item.id,
            img: <img key={products.id} style={{marginLeft:'30px',height:'50%', width:'50%', verticalAlign: 'middle'}} src={item.img} />,
            name: <p style={{fontSize:'16px'}}>{item.name}</p>,
            price: <Tag color="purple">{item.price}</Tag>,
            number: 1,
            sum: 5,
        }))
        
    }

    return (
        <>
            <Container>
                <div className="cart">
                    <div className="cart-container">
                        <div className="link">
                            <NavLink className="NavLink" exact to="/" >Home</NavLink>
                            <NavLink className="NavLink" exact to="/gioithieu" >Cart</NavLink>
                        </div>
                        <div className="table-carts">
                            <p>GIỎ HÀNG</p>
                            <Table columns={columns} dataSource={data} scroll={{ y: 500, x:800 }} bordered />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Cart;