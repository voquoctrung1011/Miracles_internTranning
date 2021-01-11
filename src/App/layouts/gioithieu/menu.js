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
      <Container>
        <div className="homess">
          <div className="menuu">
            <div className="menu-imgg">
              <img src={Logo} alt="Logoo" />
            </div>
            <div className="menu-textt">
              <ul className="listt">
              <li className="list-itemm"><NavLink exact to="/" >Trang chủ</NavLink></li>
                <li className="list-itemm"><NavLink exact to="/gioithieu" >Giới thiệu</NavLink></li>
                <li
                  className="list-item-sanphamm"
                  onMouseOver={() => setIsOpen(true)}
                >
                  <a href="#">
                    Sản phẩm
                  <img src={Dropdown} />
                  </a>
                </li>
                <li className="list-itemm"><a href="#">Tin tức </a></li>
                <li className="list-itemm"><a href="#">Bản đồ </a></li>
                <li className="list-itemm"><a href="#">Liên hệ</a></li>
              </ul>
            </div>
            <div className="menu-iconn">
              <img
                onMouseOver={() => setIsOpenCart(true)}
                onMouseOut={() => setIsOpenCart(false)}
                src={Cart} alt="Cartt"
              />
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
                <div className="img-upu" />
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
            isOpenCart && (
              <>
                <div className="img-up22" />
                <div
                  className="item-cartt"
                  onMouseOver={() => setIsOpenCart(true)}
                  onMouseOut={() => setIsOpenCart(false)}
                >
                  <div className="cartss">

                    <div className="detail-cartt">
                      <img src={Product} alt="Productt" />
                      <div className="detail-cart-textt">
                        <p>Áo sơ mi</p>
                        <p>Nam</p>
                        <p className="cart-pricee">
                          120.000
                        <span>đ</span>
                        </p>
                      </div>
                    </div>

                    <div className="detail-cartt">
                      <img src={Product} alt="Productt" />
                      <div className="detail-cart-textt">
                        <p>Áo sơ mi</p>
                        <p>Nam</p>
                        <p className="cart-pricee">
                          120.000
                        <span>đ</span>
                        </p>
                      </div>
                    </div>

                    <div className="sum-pricee">
                      <p>Tổng số: </p>
                      <p className="cart-pricee">
                        240.000
                        <span>đ</span>
                      </p>
                    </div>
                    <div>
                      <button className="btn-cartt">
                        Giỏ hàng
                    </button>
                    </div>

                  </div>
                </div>
                <ul style={{ paddingTop: "10rem" }}>
                  {cart.map(c => (
                    <li>
                      {c.a} | units {c.units}
                    </li>
                  ))}
                </ul>
                {/* <Test addProduct={handleAddFunc} /> */}
              </>
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
      </Container>
    </>
  );
}

export default Menu;