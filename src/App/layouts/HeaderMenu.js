import React, { useState } from 'react';
import Logo from "../../assets/images/logo.png";
import Search from "../../assets/images/search.png";
import Dropdown from "../../assets/images/dropdown.png";
import Cart from "../../assets/images/cart.png";
import Up from "../../assets/images/up.png";
import Up2 from "../../assets/images/up2.png";
import Product from "../../assets/images/product.png";
import Banner1 from "../../assets/images/banner1.png";
import Banner2 from "../../assets/images/banner2.png";

function HeaderMenu() {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);



  return (
    <>
      <div className="homes">
        <div className="menu">
          <div className="menu-img">
            <img src={Logo} alt="Logo" />

          </div>
          <div className="menu-text">
            <ul className="list">
              <a href="#"><li className="list-item">Trang chủ</li></a>
              <a href="#"><li className="list-item">Giới thiệu</li></a>
              <a href="#">
                <li
                  className="list-item-sanpham"
                  onMouseOver={() => setIsOpen(true)}

                >
                  Sản phẩm
                  <img src={Dropdown} />
                </li>
              </a>
              <a href="#"><li className="list-item">Tin tức </li></a>
              <a href="#"><li className="list-item">Bản đồ </li></a>
              <a href="#"><li className="list-item">Liên hệ</li></a>
            </ul>
          </div>
          <div className="menu-icon">
            <img
              onMouseOver={() => setIsOpenCart(true)}
              onMouseOut={() => setIsOpenCart(false)}
              src={Cart} alt="Cart"
            />
            <img src={Search} alt="Search" />
          </div>
        </div>
        {/* dropdown san pham */}
        {
          isOpen && (
            <>
              {/* <div className="hover-width"></div> */}
              <img className="img-up" src={Up} alt="Up" />
              <div
                onMouseOver={() => setIsOpen(true)}
                onMouseOut={() => setIsOpen(false)}
                className="item-sanpham-hover"
              >
                <div className="sanpham-display">
                  <ul> Dưỡng da
              <hr />
                    <a href="#"><li className="list-item">Áo khoác </li></a>
                    <a href="#"><li className="list-item">Bộ áo liên quan </li></a>
                    <a href="#"><li className="list-item">Quần / váy</li></a>
                    <a href="#"><li className="list-item">Quần short</li></a>
                    <a href="#"><li className="list-item">Quần jean</li></a>
                    <a href="#"><li className="list-item">Đồ đan</li></a>
                    <a href="#"><li className="list-item">Áo ni</li></a>
                  </ul>

                  <ul> Nước hoa
            <hr />
                    <a href="#"><li className="list-item">Áo cánh / Áo sơ mi </li></a>
                    <a href="#"><li className="list-item">Túi sách và balo </li></a>
                    <a href="#"><li className="list-item">Khăn quàng và Foulards</li></a>
                    <a href="#"><li className="list-item">Vớ và socks</li></a>
                    <a href="#"><li className="list-item">Bị bảo vệ</li></a>
                    <a href="#"><li className="list-item">Giày</li></a>
                    <a href="#"><li className="list-item">Jewery</li></a>
                  </ul>

                  <ul> Trang sức
            <hr />
                    <a href="#"><li className="list-item">Túi sách và balo </li></a>
                    <a href="#"><li className="list-item">Khăn quàng và Foulards</li></a>
                    <a href="#"><li className="list-item">Vớ và socks</li></a>
                    <a href="#"><li className="list-item">Bị bảo vệ</li></a>
                    <a href="#"><li className="list-item">Giày</li></a>
                    <a href="#"><li className="list-item">Jewery</li></a>
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
              <img className="img-up2" src={Up2} alt="Up" />
              <div
                className="item-cart"
                onMouseOver={() => setIsOpenCart(true)}
                onMouseOut={() => setIsOpenCart(false)}
              >
                <div className="carts">
                  <div className="detail-cart">
                    <img src={Product} alt="Product" />
                    <div className="detail-cart-text">
                      <p>Áo sơ mi</p>
                      <p>Nam</p>
                      <p className="cart-price">
                        120.000
                        <span>đ</span>
                      </p>
                    </div>
                  </div>
                  <div className="detail-cart">
                    <img src={Product} alt="Product" />
                    <div className="detail-cart-text">
                      <p>Áo sơ mi</p>
                      <p>Nam</p>
                      <p className="cart-price">
                        120.000
                        <span>đ</span>
                      </p>
                    </div>
                  </div>
                  <hr />
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
            <button className="btn-buy">
              Mua hàng
        </button>
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