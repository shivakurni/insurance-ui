import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class PolicyConfirm extends Component {

    overallPolicy = () => {
        this.props.history.push('/overallPolicy')
    }

    topTrending = () => {
        this.props.history.push(`/topTrending`)
    }

    suggestedPolicy = () => {
        this.props.history.push(`/suggestedPolicy`)
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 success-page">
                        <div>Policy Purchased Successfully.. </div>
                    </div>
               
                
                <div className="col-md-4 container header-title">
                    <button className="policy-btn" onClick={this.overallPolicy}>Overall Trending</button>
                    <button className="policy-sep" >|</button>
                    <button className="policy-btn" onClick={this.topTrending}>Trending</button>
                    <button className="policy-sep" >|</button>
                    <button className="policy-btn" onClick={this.suggestedPolicy}>Suggested Policies</button>
                </div>
                </div>
                
            </div>
        )
    }
}
export default PolicyConfirm;