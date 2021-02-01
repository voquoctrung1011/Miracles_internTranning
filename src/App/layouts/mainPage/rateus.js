import React, { useState } from 'react';
import { Container } from 'reactstrap';
import Slider from "react-slick";
import { Row, Col, Input, Button, Tag , Form} from 'antd';
import Facebook from "../../../assets/images/facebook.png";
import Twitter from "../../../assets/images/twitter.png";
import Instagram from "../../../assets/images/instagram.png";
import Google from "../../../assets/images/google.png";
import Pinterest from "../../../assets/images/pinterest.png";
import Linkedin from "../../../assets/images/linkedin.png";
import Logo from "../../../assets/images/logo.png";
import Phunu from "../../../assets/images/phunu.png";

import emailjs from 'emailjs-com';

const RateUs = () => {

    const onFinish = (values) => {
          
        console.log('Success:', values);
        //VERIFILE EMAIL THROUGH FIERBASE CLOUD

        // db.collection("Lien he")
        // .add({
        //     name: values.name,
        //     email: values.email,
        //     message: values.message
        // })
        // .then(() =>{
        //     notification.success({
        //         message:'Email',
        //         description:'Send email success'
        //     })
        // })
        // .catch((error) =>{
        //     notification.fail({
        //         message:'Email',
        //         description:'Send email failure'
        //     })
        // })

        emailjs.sendForm('service_a7912h9', 'Gmail', values, 'user_BFVMDqb7Dt5JreowSTCNx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <>

            <div className="rateus">

                {/* LINK SOCIAL */}
                {/* <Slider  {...settings}> */}
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
                {/* </Slider> */}
                {/* RAUS TEXT */}

                <div className="rateus-text">
                    <Row className="row-col" >
                        <Col span={8}>
                            <p className="text-title1">VỀ CHÚNG TÔI</p>
                            <div className="line">
                                <div className="line-before"></div>
                                <div className="line-center">///////////////////</div>
                                <div className="line-after"></div>
                            </div>
                            <div className="b">
                                <div>
                                    <img src={Logo} />
                                </div>
                                <div className="text-gioithieu">
                                    <p >GIỚI THIỆU CHUNG VỀ MỸ PHẨM HANDMADE MANDALA</p>
                                    <p>
                                        Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
                                        quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi
                                        bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.Hi, chào
                                        các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại
                                        hâm nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi
                                        mà dân tình xô nhau đi tắm Free để giải nhiệt.Hi, chào các
                                        nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ quay lại hâm
                                        nóng cái Blog này vào một ngày đầu hè nóng oi bức, khi mà
                                        dân tình xô nhau đi tắm Free để giải nhiệt.
                                    </p>
                                    <a className="xemthem" href="#">Xem thêm</a>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <p className="text-title2">BLOG</p>
                            <div className="line">
                                <div className="line-before"></div>
                                <div className="line-center">///////////////////</div>
                                <div className="line-after"></div>
                            </div>
                            <div className="b">
                                <div>
                                    <img className="woman" src={Phunu} />
                                </div>
                                <div className="text-review">
                                    <p >REVIEW SON KEM BOURJOIS VELVET</p>
                                    <p>
                                        Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
                                        quay lại hăm nóng cái Blog này vào một ngày đầu hè nóng oi
                                        bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
                                    </p>
                                    <a href="#">Bởi NamTran (27/05/2015)</a>
                                </div>
                                <div className="text-bottom">
                                    <a className="docthem" href="#">Đọc thêm</a>
                                    <p>23 bình luận</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <p className="text-title3">GỬI EMAIL CHO CHÚNG TÔI</p>
                            <div className="line">
                                <div className="line-before"></div>
                                <div className="line-center">///////////////////</div>
                                <div className="line-after"></div>
                            </div>
                            <div className="b">
                                <div className="input">
                                    <Form 
                                        onFinish={onFinish}
                                        name="basic"
                                        initialValues={{
                                            remember: true,
                                        }}
                                    >
                                        <Form.Item
                                        name="email">
                                            <Input
                                                className="input-email"
                                                placeholder="Email của bạn"
                                                name="email"
                                            />
                                        </Form.Item>
                                        <p>Gửi email để nhận những ưu đãi mới nhất</p>
                                        <Button
                                            className="btn-send"
                                            type="primary"
                                            htmlType="submit"
                                        >GỬI
                                    </Button>
                                    </Form>
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
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>

    );
}
export default RateUs;