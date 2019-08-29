import React, { Component } from 'react';
import axios from 'axios';

class ListPolicy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        console.log(this.props.match)
        axios.get(`http://10.117.189.210:9093/insurance/policies`).then((response) => {
            this.setState({ data: response.data })
        }).catch((error) => {
            console.log(error.message)
        });
    }

    buyStockHandler = (item) => {
        console.log(item);
        sessionStorage.setItem("item", JSON.stringify(item));
    //    this.props.history.push(`/placeOrder`)
    }

    topTrending = () => {
        this.props.history.push(`/topTrending`)
    }

    suggestedPolicy = () => {
        this.props.history.push(`/suggestedPolicy`)
    }
    
    render() {
        
        return (
            <div className="row">
                <div className="container header-title">
                    <span className="list-title">List of Policies</span>                   
                    <button className="policy-btn" onClick={this.topTrending}>Top Trending</button> 
                    <button className="policy-sep" >|</button> 

                    <button className="policy-btn" onClick={this.suggestedPolicy}>Suggested Policies</button> 
                </div>
                <div className="title col-md-10 container">
                    <table className="table table-bordered">
                        <thead className="tab-header-bgnd">
                            <tr>
                                <th scope="col" className="header-text">LIC Policies</th>
                                <th scope="col" className="header-text">Entry Age</th>
                                <th scope="col" className="header-text">Maximum Maturity Age</th>
                                <th scope="col" className="header-text">Policy Term</th>
                                <th scope="col" className="header-text">Minimum Premium/Purchase Price</th>
                                <th scope="col" className="header-text">Minimum Sum Assured</th>
                                <th scope="col" className="header-text">Description</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.data.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="header-text header-style">{item.policyName}</td>
                                        <td className="header-text">{item.policyMinAge}</td>
                                        <td className="header-text">{item.policyMaturityAge}</td>
                                        <td className="header-text">{item.policyTerm}</td>
                                        <td className="header-text">Rs. {item.policyPrice}</td>
                                        <td className="header-text">Rs. {item.policyAssuredSum}</td>                                        
                                        <td><button className="view-btn" onClick={() => this.buyStockHandler(item)}>View Details</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListPolicy;