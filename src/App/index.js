import React from 'react';
import HeaderMenu from './layouts/HeaderMenu'
import Bodyinfo from './layouts/bodyInfo'
import Slide from './layouts/slider'
import ProductDemo from './layouts/productDemo'




function HomePage() {
  return (
    <div className="home">
      <HeaderMenu />
      <Bodyinfo />
      <Slide />
      <ProductDemo/>
    </div>
  );
}

export default HomePage;