import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';
import Capture from '../src/images/Capture.PNG';
import ListPolicy from './components/listOfPolicies/listOfPolicies';
import SuggestedPolicy from './components/suggestedPolicies/suggestedPolicies';
import BuyProduct from '../src/components/buyProduct/buyProduct';
import TrendingPolicy from '../src/components/trendingPolicies/trendingPolicy'


function App() {
  return (
    <HashRouter>
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid nav-header">
            {/* <div className="navbar-header"> */}
              <img className="Capture" src={Capture} alt="Capture" />
              <Link className="navbar-brand" to='/'>ING Life Insurance</Link>
              <span>
               
              </span>
            {/* </div> */}
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={ListPolicy} />
          <Route exact path="/suggestedPolicy" component={SuggestedPolicy} />
          <Route exact path="/buyProduct" component={BuyProduct} />
          <Route exact path="/topTrending" component={TrendingPolicy} />

        </Switch>



      </div>
    </HashRouter>
  );
}

export default App;
