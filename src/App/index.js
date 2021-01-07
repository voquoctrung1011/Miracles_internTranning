import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderMenu from './layouts/HeaderMenu'
import Bodyinfo from './layouts/bodyInfo'
import Slide from './layouts/slider'
import ProductDemo from './layouts/productDemo'
import MainPage from './layouts/mainpage/mainpage'




function HomePage() {
  return (
    <div className="home">
      {/* <HeaderMenu />
      <Bodyinfo />
      <Slide />
      <ProductDemo/> */}
      <Router>
        <Switch>
          <Route exact path="/layouts/mainpage" render={() => <MainPage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default HomePage;