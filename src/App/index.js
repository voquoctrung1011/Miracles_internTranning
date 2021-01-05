import React from 'react';
import HeaderMenu from './layouts/HeaderMenu'
import Bodyinfo from './layouts/bodyInfo'
import Demo from './layouts/demo'




function HomePage() {
  return (
    <div className="home">
      <HeaderMenu />
      <Bodyinfo />
      <Demo />
    </div>
  );
}

export default HomePage;