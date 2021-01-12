import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './page/mainpage';
import Gioithieu from './page/giothieu';
import Lienhe from './page/lienhe';
import 'antd/dist/antd.css';


function HomePage() {
  return (
    <div className="home">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <MainPage />} />
          {/* <MainPage /> */}
        </Switch>
        <Switch>
          <Route exact path="/gioithieu" render={() => <Gioithieu />} />
        </Switch>
        <Switch>
          <Route exact path="/lienhe" render={() => <Lienhe />} />
        </Switch>
      </Router>
    </div>
  );
}

export default HomePage;