import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../../AppContext';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import ProductDemo from './productDemo';

import Logo from "../../../assets/images/logo.png";
import Search from "../../../assets/images/search.png";
import Dropdown from "../../../assets/images/dropdown.png";
import Cart from "../../../assets/images/cart.png";
import Product from "../../../assets/images/product.png";
import Banner1 from "../../../assets/images/banner1.png";
import Banner2 from "../../../assets/images/banner2.png";
import MenuRepos from "../../../assets/images/menu-repos.png";
import Exit from "../../../assets/images/exit.png";




const HeaderMenu = () => {

  const { cart, setCart } = useContext(AppContext)
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [units, setUnits] = useState();





  const showMenu = () => {
    if (!isOpenMenu)
      setIsOpenMenu(true);
    else
      setIsOpenMenu(false);
  }

  // useEffect(() => {
  //   const handleAddFunc = (product) => {
  //     console.log(product)
  //     // setCart([
  //     //   {
  //     //     id: { product.id },
  //     //     name: { product.name },
  //     //     description: { product.description },
  //     //     price: { product.price }
  //     //   }
  //     // ])
  //   }, []
  // });


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
            <NavLink exact to="/cart" > <img
              onMouseOver={() => setIsOpenCart(true)}
              onMouseOut={() => setIsOpenCart(false)}
              src={Cart} alt="Cart"
            /></NavLink>
            <img src={Search} alt="Search" />
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
        {
          isOpenCart && cart.map((itemCart) => (
            <>
              <div className="img-up2" />
              <div
                className="item-cart"
                onMouseOver={() => setIsOpenCart(true)}
                onMouseOut={() => setIsOpenCart(false)}
              >
                <div className="carts">

                  <div className="detail-cart">
                    <img src={itemCart.img} />
                    <div className="detail-cart-text">
                      <p>{itemCart.name}</p>
                      <p>{itemCart.title}</p>
                      <p className="cart-price">
                        {itemCart.price}
                        <span>đ</span>
                      </p>
                    </div>
                  </div>

                  <div className="detail-cart">
                    <img src={itemCart.img} />
                    <div className="detail-cart-text">
                      <p>{itemCart.name}</p>
                      <p>{itemCart.title}</p>
                      <p className="cart-price">
                        {itemCart.price}
                        <span>đ</span>
                      </p>
                    </div>
                  </div>

                  <div className="sum-price">
                    <p>Tổng số: </p>
                    <p className="cart-price">
                      240.000
                        <span>đ</span>
                    </p>
                  </div>
                  <div>
                    <button className="btn-cart">
                      Giỏ hàng
                    </button>
                  </div>

                </div>
              </div>

            </>
          )
          )
        }
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