import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import Slider from "react-slick";
import Plane from "../../assets/images/plane.png";
import Gift from "../../assets/images/gift.png";
import Star from "../../assets/images/star.png";
import Tinhdau from "../../assets/images/tinhdau.png";
import Nuochoa from "../../assets/images/nuochoa.png";
import Gold from "../../assets/images/gold.png";
import Tamtrang from "../../assets/images/tamtrang.png";
import Trangsuc from "../../assets/images/trangsuc.png";
import Daisy from "../../assets/images/daisy.png";
import Mauanh from "../../assets/images/person-mau.png";


function Information() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className="bodyinfo">
                <div className="bodyinfo-container">
                    <div className="bodyinfo-items">
                        <img src={Plane} />
                        <p>Miễn phí vận chuyển trên toàn quốc </p>
                    </div>
                    <div className="bodyinfo-items">
                        <img src={Gift} />
                        <p>Nhận ngay quà tặng trị giá 350.000đ</p>
                    </div>
                    <div className="bodyinfo-items">
                        <img src={Star} />
                        <p>Giảm 30% cho đơn hàng trên 5.000.000đ</p>
                    </div>
                </div>
                <div className="bodyinfo-imgs">
                    <div className="imgs-container1">
                        <div className="imgs-container1-child">
                            <img src={Tinhdau} />
                            <img src={Nuochoa} />
                        </div>
                        <img src={Gold} />
                    </div>
                    <div className="imgs-container2">
                        <img src={Tamtrang} />
                        <div className="imgs-container2-child">
                            <img src={Trangsuc} />
                            <img src={Daisy} />
                        </div>
                    </div>
                </div>

                <Slider {...settings}>
                    <div className="bodyinfo-slides">
                        <div className="bodyinfo-person">
                            <div className="person-mau">
                                <img src={Mauanh} />
                                <div className="person-text">
                                    <p>"Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ
                                    dạo<br /> nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với<br />
                                    công nghệ cải tiến mới nhất, hảng Rohto."
                                </p>
                                    <p>
                                        TUTILE
                                    <span>_Giảm đốc phát trển sản phẩm</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="bodyinfo-slides">
                        <div className="bodyinfo-person">
                            <div className="person-mau">
                                <img src={Mauanh} />
                                <div className="person-text">
                                    <p>"Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ
                                    dạo<br /> nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với<br />
                                    công nghệ cải tiến mới nhất, hảng Rohto."
                                </p>
                                    <p>
                                        TUTILE
                                    <span>_Giảm đốc phát trển sản phẩm</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="bodyinfo-slides">
                        <div className="bodyinfo-person">
                            <div className="person-mau">
                                <img src={Mauanh} />
                                <div className="person-text">
                                    <p>"Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ
                                    dạo<br /> nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với<br />
                                    công nghệ cải tiến mới nhất, hảng Rohto."
                                </p>
                                    <p>
                                        TUTILE
                                    <span>_Giảm đốc phát trển sản phẩm</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </Slider>

                <div className="product-demo">
                    <div className="product-text">
                        <div className="product-text-sanpham">
                            <p>Sản phẩm mới</p>
                            <p>Sản phẩm bán chạy</p>
                            <p>Sản phẩn đặc biệt</p>
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
                </div>
            </div>
        </>

    );
}
export default Information;