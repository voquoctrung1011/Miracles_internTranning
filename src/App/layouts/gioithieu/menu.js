import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Logo from "../../../assets/images/logo.png";
import Search from "../../../assets/images/search.png";
import Dropdown from "../../../assets/images/dropdown.png";
import Cart from "../../../assets/images/cart.png";
import Product from "../../../assets/images/product.png";
import MenuRepos from "../../../assets/images/menu-repos.png";
import Exit from "../../../assets/images/exit.png";



const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [units, setUnits] = useState();


  const [cart, setCart] = useState([
    {
      id: "id",
      name: "name",
      description: "description",
      price: "price",
      units: 1
    }
  ])

  const showMenu = () => {
    if (!isOpenMenu)
      setIsOpenMenu(true);
    else
      setIsOpenMenu(false);
  }




  return (
    <>
        <div className="homess">
          <div className="menuu">
            <div className="menu-imgg">
            <NavLink exact to="/" >
              <img src={Logo} alt="Logo" />
            </NavLink>
            </div>
            <div className="menu-textt">
              <ul className="listt">
                <li className="list-itemm"><NavLink exact to="/" >Trang chủ</NavLink></li>
                <li className="list-itemm"><NavLink exact to="/gioithieu" >Giới thiệu</NavLink></li>
                <li
                  className="list-item-sanphamm"
                  onMouseOver={() => setIsOpen(true)}
                >
                  <NavLink exact to="/sanpham" >Sản phẩm
                  <img src={Dropdown} />
                  </NavLink>
                </li>
                <li className="list-itemm"><a href="#">Tin tức </a></li>
                <li className="list-itemm"><a href="#">Bản đồ </a></li>
                <li className="list-itemm"><NavLink exact to="/lienhe" >Liên hệ</NavLink></li>
              </ul>
            </div>
            <div className="menu-iconn">
            <NavLink exact to="/cart" >
              <img
                onMouseOver={() => setIsOpenCart(true)}
                onMouseOut={() => setIsOpenCart(false)}
                src={Cart} alt="Cartt"
              />
            </NavLink>
              <img src={Search} alt="Searchh" />
              <img
                className="img-menu-reposs"
                src={MenuRepos}
                alt="MenuRepos"
                onClick={showMenu}
              />
              <img
                className="img-exitt"
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
                {/* <div className="img-upp" /> */}
                <div
                  onMouseOver={() => setIsOpen(true)}
                  onMouseOut={() => setIsOpen(false)}
                  className="item-sanpham-hoverr"
                >
                  <div className="sanpham-displayy">
                    <ul>
                      <p>Dưỡng da</p>
                      <li className="list-itemm"><a href="#">Áo khoác </a></li>
                      <li className="list-itemm"><a href="#">Bộ áo liên quan </a></li>
                      <li className="list-itemm"><a href="#">Quần / váy</a></li>
                      <li className="list-itemm"><a href="#">Quần short</a></li>
                      <li className="list-itemm"><a href="#">Quần jean</a></li>
                      <li className="list-itemm"><a href="#">Đồ đan</a></li>
                      <li className="list-itemm"><a href="#">Áo ni</a></li>
                    </ul>

                    <ul>
                      <p>Nước hoa</p>
                      <li className="list-itemm"><a href="#">Áo cánh / Áo sơ mi </a></li>
                      <li className="list-itemm"><a href="#">Túi sách và balo</a></li>
                      <li className="list-itemm"><a href="#">Khăn quàng và Foulards</a></li>
                      <li className="list-itemm"><a href="#">Vớ và socks</a></li>
                      <li className="list-itemm"><a href="#">Bị bảo vệ</a></li>
                      <li className="list-itemm"><a href="#">Giày</a></li>
                      <li className="list-itemm"><a href="#">Jewery</a></li>
                    </ul>

                    <ul>
                      <p>Trang sức</p>
                      <li className="list-itemm"><a href="#">Túi sách và balo </a></li>
                      <li className="list-itemm"><a href="#">Khăn quàng và Foulards</a></li>
                      <li className="list-itemm"><a href="#">Vớ và socks</a></li>
                      <li className="list-itemm"><a href="#">Bị bảo vệ</a></li>
                      <li className="list-itemm"><a href="#">Giày</a></li>
                      <li className="list-itemm"><a href="#">Jewery</a></li>
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
                {/* <div className="img-up2" /> */}
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
                <div className="menu-reposs">
                  <div className="menu-containn">
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
        </div>
    </>
  );
}

export default Menu;