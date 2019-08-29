import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

import axios from 'axios';

export default class OverallTrendingPolicy extends PureComponent {
  constructor() {
    super()
    this.state = {
      trendingPoliciesList: []
    }
  }
  componentDidMount() {
    this.getData().then(response => {
      this.setState({ trendingPoliciesList: response.data });
    });
  }
  getData = () => {
    return new Promise((resolve, reject) => {
      axios.get('http://10.117.189.210:9093/insurance/trending').then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  back = () => {
    this.props.history.push(`/`)
  }

  render() {
    return (
      <div className="row">
        <div className="container header-title">
          <span className="graph">Overall Trending Policy</span>
          <button className="cancel-btn policy-btn" onClick={this.back}>Back</button>
          <BarChart
            width={1000}
            height={300}
            data={this.state.trendingPoliciesList}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="6 6" />
            <XAxis dataKey="policyName" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="policyCount" fill="#ff6600" />
          </BarChart>
        </div>
      </div>
    );
  }
}


