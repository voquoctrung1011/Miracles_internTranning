import React, { useState, useRef, useContext } from 'react';
import AppContext from '../../../AppContext';
import { Drawer, Button, notification, Popconfirm } from 'antd';
import { Container, Table } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


import Logo from "../../../assets/images/logo.png";
import Search from "../../../assets/images/search.png";
import Dropdown from "../../../assets/images/dropdown.png";
import Cart from "../../../assets/images/cart.png";
import Banner1 from "../../../assets/images/banner1.png";
import Banner2 from "../../../assets/images/banner2.png";
import MenuRepos from "../../../assets/images/menu-repos.png";
import Exit from "../../../assets/images/exit.png";




const HeaderMenu = (props) => {

  const {
    cart,
    setCart,
    products,
    setProducts,
    onDelete,
    onMinus,
    onPlus
  } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [visible, setVisible] = useState(false);
  const [inputValues, setInputValues] = useState({
    strSearch: '',
  })


  const styleCount = {
    textAlign: "center",
    width: "17px",
    fontWeight: "bold",
    fontSize: "15px",
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
  }

  const showMenu = () => {
    if (!isOpenMenu)
      setIsOpenMenu(true);
    else
      setIsOpenMenu(false);
  }


  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleSearch = () => {
    console.log(inputValues.strSearch);
  }
  const handleClear = () => {
    setInputValues({ strSearch: '' });
    console.log(inputValues.strSearch);
  }
  const handleChange = (event) => {
    setInputValues({
      strSearch: event.target.value,
    });
  }

  let sumCount = 0;
    let totalPrice =0;
    cart.forEach((item, index) => {
        sumCount += item.count ;   
        totalPrice += item.sumPrice;    
    });


  return (
    <>
      <div className="homes">
        <div className="menu">
          <div className="menu-img">
            <NavLink exact to="/" >
              <img src={Logo} alt="Logo" />
            </NavLink>
          </div>
          <div className="menu-text">
            <ul className="list">
              <li className="list-item"><NavLink exact to="/" >Trang chủ</NavLink></li>
              <li className="list-item"><NavLink exact to="/gioithieu" >Giới thiệu</NavLink></li>
              <li
                className="list-item-sanpham"
                onMouseOver={() => setIsOpen(true)}
              >
                <NavLink exact to="/sanpham" >Sản phẩm
                  <img src={Dropdown} />
                </NavLink>
              </li>
              <li className="list-item"><a href="#">Tin tức </a></li>
              <li className="list-item"><a href="#">Bản đồ </a></li>
              <li className="list-item"><NavLink exact to="/lienhe" >Liên hệ</NavLink></li>
            </ul>
          </div>
          <div className="menu-icon">
            <img
              style={{ cursor: 'pointer' }}
              onClick={showDrawer}
              src={Cart} alt="Cart"
            />
            <p>({sumCount})</p>
            <NavLink exact to="/cart" >
              <Popconfirm title="Do you want to visit cartPage?？" okText="Yes" cancelText="No">
                <img
                  src={Search} alt="Search" />
              </Popconfirm>
              {/* // style={search == false ? { display: 'block' } : { display: 'none' }}
              // onClick={() => setSearch(true)} */}

            </NavLink>
            <img
              className="img-menu-repos"
              src={MenuRepos}
              alt="MenuRepos"
              onClick={showMenu}
            />
            <img
              className="img-exit"
              src={Exit}
              alt="Exit"
              onClick={showMenu}
            />
          </div>
        </div>
        {/* dropdown san pham */}
        {
          isOpen && (
            <>
              {/* <div className="hover-width"></div> */}
              <div className="img-up" />
              <div
                onMouseOver={() => setIsOpen(true)}
                onMouseOut={() => setIsOpen(false)}
                className="item-sanpham-hover"
              >
                <div className="sanpham-display">
                  <ul>
                    <p>Dưỡng da</p>
                    <li className="list-item"><a href="#">Áo khoác </a></li>
                    <li className="list-item"><a href="#">Bộ áo liên quan </a></li>
                    <li className="list-item"><a href="#">Quần / váy</a></li>
                    <li className="list-item"><a href="#">Quần short</a></li>
                    <li className="list-item"><a href="#">Quần jean</a></li>
                    <li className="list-item"><a href="#">Đồ đan</a></li>
                    <li className="list-item"><a href="#">Áo ni</a></li>
                  </ul>

                  <ul>
                    <p>Nước hoa</p>
                    <li className="list-item"><a href="#">Áo cánh / Áo sơ mi </a></li>
                    <li className="list-item"><a href="#">Túi sách và balo</a></li>
                    <li className="list-item"><a href="#">Khăn quàng và Foulards</a></li>
                    <li className="list-item"><a href="#">Vớ và socks</a></li>
                    <li className="list-item"><a href="#">Bị bảo vệ</a></li>
                    <li className="list-item"><a href="#">Giày</a></li>
                    <li className="list-item"><a href="#">Jewery</a></li>
                  </ul>

                  <ul>
                    <p>Trang sức</p>
                    <li className="list-item"><a href="#">Túi sách và balo </a></li>
                    <li className="list-item"><a href="#">Khăn quàng và Foulards</a></li>
                    <li className="list-item"><a href="#">Vớ và socks</a></li>
                    <li className="list-item"><a href="#">Bị bảo vệ</a></li>
                    <li className="list-item"><a href="#">Giày</a></li>
                    <li className="list-item"><a href="#">Jewery</a></li>
                  </ul>

                </div>
              </div>
            </>
          )
        }

        {/* dropdown CART */}
        {/* { console.log('arr: ', cart)} */}
        <Drawer
          title="Cart Items"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
          width='410'
        >
          {
            cart.map((itemCart, index) => {
              return (
                <>
                  <div className="item-cart">
                    <div className="carts">
                      <div className="detail-cart">
                        <img src={itemCart.img} />
                        <div className="detail-cart-text">
                          <p style={{ fontSize: '25px', fontStyle: 'italic', fontFamily: 'utm-viceroyJF' }}>{itemCart.name}</p>
                          <p style={{ paddingLeft: '15px', color: '#e7e7e7', fontWeight: 'bold' }}>{itemCart.title}</p>
                          <p className="cart-price">
                            Price: {itemCart.price}
                            <span>{itemCart.price === "" ? "" : "$"}</span>
                          </p>
                          <p style={{ width: '70%', display: 'flex', justifyContent: 'space-evenly' }}>
                            Qty:
                              <span onClick={() => onMinus(itemCart, index)} style={styleCount}>-</span>
                            {itemCart.count}
                            <span onClick={() => onPlus(itemCart, index)} style={styleCount}>+</span>
                          </p>
                        </div>
                      </div>

                      <div className="sum-price">
                        <p style={{ fontWeight: 'bold', fontSize: '14px' }}>Total : </p>
                        <p className="cart-price">
                          {itemCart.price * itemCart.count}
                          <span>{itemCart.price === "" ? "" : "$"}</span>
                        </p>
                      </div>

                    </div>
                  </div>

                </>
              )
            })
          }
          <Table bordered style={{marginTop:'30px'}} >
            <thead >
              <tr style={{ fontFamily: "utm-viceroyJF" }}>
                <th
                  style={{
                    textAlign: 'left',
                    fontSize: '25px',
                  }}>
                  Total
                </th>
                <th
                  style={{
                    width: '150px',
                    fontSize: '25px',
                    color: '#7ba12d',
                  }}>
                  <p>{totalPrice}<span>$</span></p>
                </th>
              </tr>
            </thead>
          </Table>
          <NavLink exact to="/cart" >
            <button className="btn-cart">
              Your Cart
            </button>
          </NavLink>
        </Drawer>
        {
          isOpenMenu && (
            <>
              <div className="menu-repos">
                <div className="menu-contain">
                  <ul>
                    <li><a>Trang chủ</a></li>
                    <li><a>Giới thiệu</a></li>
                    <li
                      onMouseOver={() => setIsOpen(true)}>
                      <a>Sản phẩm</a>
                    </li>
                    <li><a>Tin tức</a></li>
                    <li><a>Bản đồ</a></li>
                    <li><a>Liên hệ</a></li>
                  </ul>
                </div>
              </div>
            </>
          )
        }
        <div className="wrap-container">
          <div className="wrap-container1">
            <img src={Banner1} />
            <p className="greenVera">Green Vera</p>
            <p className="title">Sản phẩm tinh dầu dưỡng da mới nhất của Mandalla</p>
            <p className="price">
              Giá chỉ 750.000
            <span>đ</span>
            </p>
            <NavLink exact to="/sanpham" >
              <button className="btn-buy">
                BUY NOW
            </button>
            </NavLink>
          </div>
          <div className="wrap-container2">
            <img src={Banner2} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderMenu;