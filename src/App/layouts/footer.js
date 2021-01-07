import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Row, Col } from 'antd';
import imgFooter from "../../assets/images/footer_extend.png";
import Phone from "../../assets/images/call.png";
import Email from "../../assets/images/email.png";
import Phoneban from "../../assets/images/phoneban.png";
import Map from "../../assets/images/map.png";



const footer = () => {


    return (
        <>
            <Container>
                <div className="footer">
                    <div className="container">
                        <Row>
                            <Col span={8}>
                                <p className="title">LIÊN HỆ VỚI CHÚNG TÔI</p>
                                <div className="vitri">
                                    <div className="vitri-title">
                                        <img src={Map} />
                                        <p>Tầng 4, Tòa nhà Hanoi Group Số 442 Đội Cấn,<br />
                                     P.Cống Vị, Q. Ba Đình, Hà Nội
                                     </p>
                                    </div>
                                    <div>
                                        <p>(04) 6674 2332</p>
                                        <p>(04) 6674 2332</p>
                                        <p>(04) 6674 2332</p>
                                        <p>Support@bizweb.vn</p>
                                    </div>
                                </div>
                            </Col>
                            <Col span={4}>
                                <p className="title">CHUYỂN HÀNG</p>
                                <ul className="list">
                                    <li>mua sắm trực tuyến</li>
                                    <li>Đến từ chúng tôi gửi đến</li>
                                    <li>Chính sách vận chuyển</li>
                                    <li>Vận chuyển thông tin</li>
                                </ul>
                            </Col>
                            <Col span={4}>
                                <p className="title">HỖ TRỢ</p>
                                <ul className="list">
                                    <li>Câu chuyện của chúng tôi</li>
                                    <li>Thanh toán an toàn</li>
                                    <li>Tùy chọn vận chuyển</li>
                                    <li>Chính sách vận chuyển</li>
                                </ul>
                            </Col>
                            <Col span={4}>
                                <p className="title">THÔNG TIN</p>
                                <ul className="list">
                                    <li>về Chúng Tôi</li>
                                    <li>Điều khoản & điều kiện</li>
                                    <li>Chính Sách Riêng Tư</li>
                                    <li>Vận chuyển thông tin</li>
                                </ul>
                            </Col>
                            <Col span={4}>
                                <p className="title">MY ACCOUNT</p>
                                <ul className="list">
                                    <li>mua sắm trực tuyến</li>
                                    <li>Đến từ chúng tôi gửi đến</li>
                                    <li>Chính sách vận chuyển</li>
                                    <li>Theo dõi đặt hàng của tôi</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <img className="imgFooter" src={imgFooter} />
                </div>
            </Container>
        </>

    );
}
export default footer;