import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';
import Capture from '../src/images/Capture.PNG';
import ListPolicy from './components/listOfPolicies/listOfPolicies';
import SuggestedPolicy from './components/suggestedPolicies/suggestedPolicies';
import BuyProduct from '../src/components/buyProduct/buyProduct';
import TrendingPolicy from '../src/components/trendingPolicies/trendingPolicy'
import PolicyConfirm from '../src/components/policyConfirm/policyConfirm'
import OverallTrendingPolicy from '../src/components/overallTrending/overallTrending'
import { withTranslation } from 'react-i18next';


class App extends Component {
  handleSelect = (event) => {
    let { i18n } = this.props;
    i18n.changeLanguage(event.target.value)
  }

  render() {
    let { t  } = this.props;
    return (
    <HashRouter>
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid nav-header">
            <img className="Capture" src={Capture} alt="Capture" />
            <Link className="navbar-brand" to='/'>{t('heading')}</Link>
            <select onChange={this.handleSelect}>
              <option value="en">English</option>
              <option value="sp">Spanish</option>
            </select>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={ListPolicy} />
          <Route exact path="/suggestedPolicy" component={SuggestedPolicy} />
          <Route exact path="/buyPolicy" component={BuyProduct} />
          <Route exact path="/topTrending" component={TrendingPolicy} />
          <Route exact path="/policyConfirm" component={PolicyConfirm} />
          <Route exact path="/overallPolicy" component={OverallTrendingPolicy} />

        </Switch>
      </div>
    </HashRouter>
  );
}
}

export default withTranslation()(App);
