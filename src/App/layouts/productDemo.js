import React, { useState } from 'react';
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap';
import { Button, Radio, Carousel } from 'antd';
import Product1 from "../../assets/images/product_1.png";
import Product2 from "../../assets/images/product_2.png";
import Product3 from "../../assets/images/product_3.png";
import Product4 from "../../assets/images/product_4.png";
import Product5 from "../../assets/images/product_5.png";
import Product6 from "../../assets/images/product_6.png";
import Product7 from "../../assets/images/product_7.png";
import Product9 from "../../assets/images/product_9.png";
import Heart from "../../assets/images/heart.png";
import Reload from "../../assets/images/reload.png";


const Information = () => {


    const [isOpen, setIsOpen] = useState(false)

    const settings = {
        arrows: true,
        asNavfor: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            // {
            //     breakpoint: 1000,
            //     settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 1,
            //         infinite: true,
            //         dots: false
            //     }
            // }
        ]
    };

    const IsShowButton = () => {
        if (!isOpen) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }

    function onChange(a, b, c) {
        console.log(a, b, c);
    }

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <>
            <Container>
                <div className="product-demo">
                    <div className="product-text">
                        <div className="product-text-sanpham">
                            <p>Sản phẩm mới</p>
                            <p>Sản phẩm bán chạy</p>
                            <p>Sản phẩn đặc biệt</p>
                        </div>
                        <div className="line">
                            <div className="line-before"></div>
                            <div className="line-center">//////////////</div>
                            <div className="line-after"></div>

                        </div>
                        <div className="product-text-list">
                            <ul>
                                <li>Mỹ phẩm</li>
                                <li>Chăm sóc da</li>
                                <li>Dành cho tóc</li>
                                <li>Nước hoa</li>
                                <li>Trang sức</li>
                                <li>Quà tặng</li>
                            </ul>
                        </div>
                    </div>

                    <div className="products">
                        <Slider  {...settings}>

                            <div className="product-container">
                                <img src={Product1}></img>
                                <div className="table-price">
                                    <p className="product-title">Home</p>
                                    <p className="product-name">Mỹ phẩm châu âu</p>
                                    <div className="line"></div>
                                    <div className="text-price">
                                        <p className="price1">
                                            350.000<span>đ</span>
                                        </p>
                                        <p className="price2">
                                            450.000<span>đ</span>
                                        </p>
                                    </div>
                                    <div
                                        className="button-"
                                    >
                                        <div className="button-price">
                                            <Button type="primary">Mua hàng</Button>
                                        </div>
                                        <div className="button-heart">
                                            <Button type="primary" shape="circle">
                                                <img src={Heart}></img>
                                            </Button>
                                        </div>
                                        <div className="button-reload">
                                            <Button type="primary" shape="circle">
                                                <img src={Reload}></img>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-container">
                                <img src={Product2}></img>
                                <div className="table-price">
                                    <p className="product-title">Home</p>
                                    <p className="product-name">Mỹ phẩm châu âu</p>
                                    <div className="line"></div>
                                    <div className="text-price">
                                        <p className="price1">
                                            350.000<span>đ</span>
                                        </p>
                                        <p className="price2">
                                            450.000<span>đ</span>
                                        </p>
                                    </div>
                                    <div className="button-">
                                        <div className="button-price">
                                            <Button type="primary">Mua hàng</Button>
                                        </div>
                                        <div className="button-heart">
                                            <Button type="primary" shape="circle">
                                                <img src={Heart}></img>
                                            </Button>
                                        </div>
                                        <div className="button-reload">
                                            <Button type="primary" shape="circle">
                                                <img src={Reload}></img>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-container">
                                <img src={Product3}></img>
                                <div className="table-price">
                                    <p className="product-title">Home</p>
                                    <p className="product-name">Mỹ phẩm châu âu</p>
                                    <div className="line"></div>
                                    <div className="text-price">
                                        <p className="price1">
                                            350.000<span>đ</span>
                                        </p>
                                        <p className="price2">
                                            450.000<span>đ</span>
                                        </p>
                                    </div>
                                    <div className="button-">
                                        <div className="button-price">
                                            <Button type="primary">Mua hàng</Button>
                                        </div>
                                        <div className="button-heart">
                                            <Button type="primary" shape="circle">
                                                <img src={Heart}></img>
                                            </Button>
                                        </div>
                                        <div className="button-reload">
                                            <Button type="primary" shape="circle">
                                                <img src={Reload}></img>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-container">
                                <img src={Product4}></img>
                                <div className="table-price">
                                    <p className="product-title">Home</p>
                                    <p className="product-name">Mỹ phẩm châu âu</p>
                                    <div className="line"></div>
                                    <div className="text-price">
                                        <p className="price1">
                                            350.000<span>đ</span>
                                        </p>
                                        <p className="price2">
                                            450.000<span>đ</span>
                                        </p>
                                    </div>
                                    <div className="button-">
                                        <div className="button-price">
                                            <Button type="primary">Mua hàng</Button>
                                        </div>
                                        <div className="button-heart">
                                            <Button type="primary" shape="circle">
                                                <img src={Heart}></img>
                                            </Button>
                                        </div>
                                        <div className="button-reload">
                                            <Button type="primary" shape="circle">
                                                <img src={Reload}></img>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-container">
                                <img src={Product5}></img>
                                <div className="table-price">
                                    <p className="product-title">Home</p>
                                    <p className="product-name">Mỹ phẩm châu âu</p>
                                    <div className="line"></div>
                                    <div className="text-price">
                                        <p className="price1">
                                            350.000<span>đ</span>
                                        </p>
                                        <p className="price2">
                                            450.000<span>đ</span>
                                        </p>
                                    </div>
                                    <div className="button-">
                                        <div className="button-price">
                                            <Button type="primary">Mua hàng</Button>
                                        </div>
                                        <div className="button-heart">
                                            <Button type="primary" shape="circle">
                                                <img src={Heart}></img>
                                            </Button>
                                        </div>
                                        <div className="button-reload">
                                            <Button type="primary" shape="circle">
                                                <img src={Reload}></img>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-container">
                                <img src={Product6}></img>
                                <div className="table-price">
                                    <p className="product-title">Home</p>
                                    <p className="product-name">Mỹ phẩm châu âu</p>
                                    <div className="line"></div>
                                    <div className="text-price">
                                        <p className="price1">
                                            350.000<span>đ</span>
                                        </p>
                                        <p className="price2">
                                            450.000<span>đ</span>
                                        </p>
                                    </div>
                                    <div className="button-">
                                        <div className="button-price">
                                            <Button type="primary">Mua hàng</Button>
                                        </div>
                                        <div className="button-heart">
                                            <Button type="primary" shape="circle">
                                                <img src={Heart}></img>
                                            </Button>
                                        </div>
                                        <div className="button-reload">
                                            <Button type="primary" shape="circle">
                                                <img src={Reload}></img>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-container">
                                <img src={Product7}></img>
                                <div className="table-price">
                                    <p className="product-title">Home</p>
                                    <p className="product-name">Mỹ phẩm châu âu</p>
                                    <div className="line"></div>
                                    <div className="text-price">
                                        <p className="price1">
                                            350.000<span>đ</span>
                                        </p>
                                        <p className="price2">
                                            450.000<span>đ</span>
                                        </p>
                                    </div>
                                    <div className="button-">
                                        <div className="button-price">
                                            <Button type="primary">Mua hàng</Button>
                                        </div>
                                        <div className="button-heart">
                                            <Button type="primary" shape="circle">
                                                <img src={Heart}></img>
                                            </Button>
                                        </div>
                                        <div className="button-reload">
                                            <Button type="primary" shape="circle">
                                                <img src={Reload}></img>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-container">
                                <img src={Product9}></img>
                                <div className="table-price">
                                    <p className="product-title">Home</p>
                                    <p className="product-name">Mỹ phẩm châu âu</p>
                                    <div className="line"></div>
                                    <div className="text-price">
                                        <p className="price1">
                                            350.000<span>đ</span>
                                        </p>
                                        <p className="price2">
                                            450.000<span>đ</span>
                                        </p>
                                    </div>
                                    <div className="button-">
                                        <div className="button-price">
                                            <Button type="primary">Mua hàng</Button>
                                        </div>
                                        <div className="button-heart">
                                            <Button type="primary" shape="circle">
                                                <img src={Heart}></img>
                                            </Button>
                                        </div>
                                        <div className="button-reload">
                                            <Button type="primary" shape="circle">
                                                <img src={Reload}></img>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </Slider>
                    </div>

                </div>

            </Container>
        </>

    );
}
export default Information;