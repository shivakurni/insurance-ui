import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import axios from 'axios';

export default class TrendingPolicy extends PureComponent {
  constructor() {
    super()
    this.state = {
      trendingPoliciesList: []
    }
  }
  componentDidMount() {
    this.getData().then(response => {
      console.log(response.data)
      this.setState({ trendingPoliciesList: response.data });
    });
  }
  getData = () => {
    return new Promise((resolve, reject) => {
      axios.get('graph.json').then((response) => {
        resolve(response);
        console.log(response);
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
          <span className="graph">Top 5 Trending Policy</span>
          <button className="cancel-btn policy-btn" onClick={this.back}>Back</button>


          <BarChart
            width={500}
            height={300}
            data={this.state.trendingPoliciesList}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="policyName" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="count" fill="#ff6600" />
          </BarChart>
        </div>
      </div>
    );
  }
}


