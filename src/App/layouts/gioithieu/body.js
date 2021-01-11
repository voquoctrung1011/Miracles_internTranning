import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


const Body = () => {


  return (
    <>
      <Container>
        <div className="gioithieu">
          <div className="link">
            <NavLink className="NavLink" exact to="/" >Home</NavLink>
            <NavLink className="NavLink" exact to="/gioithieu" >Về chúng tôi</NavLink>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Body;