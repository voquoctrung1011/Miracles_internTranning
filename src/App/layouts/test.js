

import React, { Component } from "react";
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
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <>
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
            </>
        );
    }
}