import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Row, Col, Input, Button,Tag } from 'antd';
import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/twitter.png";
import Instagram from "../../assets/images/instagram.png";
import Google from "../../assets/images/google.png";
import Pinterest from "../../assets/images/pinterest.png";
import Linkedin from "../../assets/images/linkedin.png";
import Logo from "../../assets/images/logo.png";
import Phunu from "../../assets/images/phunu.png";

const RateUs = () => {

    return (
        <>
            <Container>
                <div className="rateus">

                    {/* LINK SOCIAL */}

                    <div className="link-social">
                        <div className="facebook">
                            <img src={Facebook} />
                            <p>Facebook</p>
                        </div>
                        <div className="twitter">
                            <img src={Twitter} />
                            <p>Twitter</p>
                        </div>
                        <div className="instgram">
                            <img src={Instagram} />
                            <p>Instagram</p>
                        </div>
                        <div className="google">
                            <img src={Google} />
                            <p>Google</p>
                        </div>
                        <div className="pinterest">
                            <img src={Pinterest} />
                            <p>Pinterest</p>
                        </div>
                        <div className="linkedin">
                            <img src={Linkedin} />
                            <p>Linkedin</p>
                        </div>
                    </div>

                    {/* RAUS TEXT */}

                    <div className="rateus-text">
                        <Row>
                            <Col span={8}>
                                <p>VỀ CHÚNG TÔI</p>
                                <div className="line">
                                    <div className="line-before"></div>
                                    <div className="line-center">///////////////////</div>
                                    <div className="line-after"></div>
                                </div>
                            </Col>
                            <Col span={8}>
                                <p>BLOG</p>
                                <div className="line">
                                    <div className="line-before"></div>
                                    <div className="line-center">///////////////////</div>
                                    <div className="line-after"></div>
                                </div>
                            </Col>
                            <Col span={8}>
                                <p>GỬI EMAIL CHO CHÚNG TÔI</p>
                                <div className="line">
                                    <div className="line-before"></div>
                                    <div className="line-center">///////////////////</div>
                                    <div className="line-after"></div>
                                </div>
                            </Col>
                        </Row>
                    </div>


                    {/* FORM SUBMIT */}

                    <div className="form-submit">
                        <Row>
                            <Col span={8}>
                                <div>
                                    <img src={Logo} />
                                </div>
                                <div className="text-gioithieu">
                                    <p>GIỚI THIỆU CHUNG VỀ MỸ PHẨM HANDMADE MANDALA</p>
                                    <p>
                                        Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ<br />
                                    quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi<br />
                                    bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.Hi, chào<br />
                                    các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại<br />
                                    hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi <br />
                                    mà dân tình xô nhau đi tắm Free để giải nhiệt.Hi, chào các<br />
                                    nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm<br />
                                    nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà<br />
                                    dân tình xô nhau đi tắm Free để giải nhiệt.<br />
                                    </p>
                                    <a className="xemthem" href="#">Xem thêm</a>
                                </div>


                            </Col>
                            <Col span={8}>
                                <div>
                                    <img className="woman" src={Phunu} />
                                </div>
                                <div className="text-review">
                                    <p>REVIEW SON KEM BOURJOIS VELVET</p>
                                    <p>
                                        Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ<br />
                                    quay lại hăm nóng cái Blog này vào một ngày đầu hè nóng oi<br />
                                    bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.<br />
                                    </p>
                                    <a href="#">Bởi NamTran (27/05/2015)</a>
                                </div>
                                <div className="text-bottom">
                                    <a className="docthem" href="#">Đọc thêm</a>
                                    <p>23 bình luận</p>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className="input">
                                    <Input 
                                        className="input-email" 
                                        placeholder="Email của bạn" 
                                    />
                                    <p>Gửi email để nhận những ưu đãi mới nhất</p>
                                    <Button 
                                        className="btn-send"
                                        type="primary"
                                        >GỬI
                                    </Button>
                                </div>
                                <div className="tag-sanpham">
                                    <p>TAG SẢN PHẨM</p>
                                    <div className="line">
                                        <div className="line-before"></div>
                                        <div className="line-center">///////////////////</div>
                                        <div className="line-after"></div>
                                    </div>
                                </div>
                                <div className="product-tag-list">
                                    <ul>
                                        <li><Tag color="lime">Đồng hồ</Tag></li>
                                        <li><Tag color="lime">Túi</Tag></li>
                                        <li><Tag color="lime">Phụ kiện</Tag></li>
                                        <li><Tag color="lime">Đồng hồ</Tag></li>
                                        <li><Tag color="lime">Túi</Tag></li>
                                        <li><Tag color="lime">Giày</Tag></li>
                                        <li><Tag color="lime">Sandal</Tag></li>
                                        <li><Tag color="lime">Áo sơ mi</Tag></li>
                                        <li><Tag color="lime">Nước hoa</Tag></li>
                                        <li><Tag color="lime">Giày</Tag></li>
                                        <li><Tag color="lime">Sandal</Tag></li>
                                        <li><Tag color="lime">Trẻ em</Tag></li>
                                        <li><Tag color="lime">Người lớn</Tag></li>
                                        <li><Tag color="lime">Người già</Tag></li>
                                        <li><Tag color="lime">Trẻ nhỏ</Tag></li>
                                        <li><Tag color="lime">Trẻ nhỏ</Tag></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </>

    );
}
export default RateUs;