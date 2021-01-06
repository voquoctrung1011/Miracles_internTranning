import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';


function Information() {


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
            </Container>
        </>

    );
}
export default Information;