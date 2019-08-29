import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { withTranslation } from 'react-i18next';


class SuggestedPolicy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfPolicies: [],
            policyDetails: []
        }
    }

    componentDidMount() {
       
        axios.get(`http://10.117.189.210:9093/insurance/suggestions`).then((response) => {
            this.setState({ listOfPolicies: response.data })
            
            localStorage.setItem("policyName", response.data.policyName);
        }).catch((error) => {
            
        });
    }

    topTrending = () => {
        this.props.history.push(`/topTrending`)
    }

    suggestedPolicy = () => {
        this.props.history.push(`/suggestedPolicy`)
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };

    handlePolicyDetails = (item) => {
        this.setState({ modal: !this.state.modal });
        return new Promise((resolve, reject) => {
            axios.get(`http://10.117.189.210:9093/insurance/policy/${item.policyId}`).then((response) => {
                resolve(response);
                localStorage.setItem("policyName", item.policyName);
                localStorage.setItem("policyId", item.policyId);
                this.setState({ policyDetails: [response.data] });
            }).catch((error) => {
                reject(error);
            });
        });
    }

    handleBuyPolicy = () => {
        this.props.history.push('/BuyProduct');
    }

    cancel = () => {
        this.props.history.push('/');
    }

    back = () => {
        this.props.history.push(`/`)
    }

    topTrending = () => {
        this.props.history.push(`/topTrending`)
    }

    overallPolicy = () => {
        this.props.history.push('/overallPolicy')
    }



    render() {

        return (
            <div className="row">
                <div className="container header-title">
                    <span className="list-title">Suggested Policies by other Frequent Users</span>
                    <button className="policy-btn" onClick={this.back}>Back</button>
                    <button className="policy-sep" >|</button>
                    <button className="policy-btn" onClick={this.overallPolicy}>Overall Trending</button>
                    <button className="policy-sep" >|</button>
                    <button className="policy-btn" onClick={this.topTrending}>Top Trending</button>
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
                            {this.state.listOfPolicies.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="header-text header-style">{item.policyName}</td>
                                        <td className="header-text">{item.policyMinAge}</td>
                                        <td className="header-text">{item.policyMaturityAge}</td>
                                        <td className="header-text">{item.policyTerm}</td>
                                        <td className="header-text">Rs. {item.policyPrice}</td>
                                        <td className="header-text">Rs. {item.policyAssuredSum}</td>
                                        <td><button className="view-btn" onClick={() => this.handlePolicyDetails(item)} data-toggle="modal">View Details</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>POLICY DETAILS: {this.productName} </ModalHeader>
                    <ModalBody>
                        <div>
                            {this.state.policyDetails.map((item1, j) => {
                                return (
                                    <React.Fragment key={j}>
                                        <div>

                                            <u> POLICY DESCRIPTION </u><br />
                                            <div><b>DESCRIPTION: </b>{item1.policy.policyDescription}</div>
                                            <hr />

                                            <u> SALIENT FEATURES: </u><br />
                                            <div><b>TAX BENEFIT: </b>{item1.salientFeatures.taxBenefit}</div>
                                            <div> <b>LOAN AVAILABLE: </b>{item1.salientFeatures.loanAvailable}</div>
                                            <div><b>MATURITY BENIFIT: </b>{item1.salientFeatures.maturityBenifit}</div>
                                            <div><b>MEDICAL EXAM: </b>{item1.salientFeatures.medicalExam}</div>
                                            <hr />

                                            <u> POLICY TERM CONDITIONS: </u><br />
                                            <div><b>LOAN FACILITY: </b>{item1.terms.policyLoanFacility}</div>
                                            <div><b>POLICY REVIVAL: </b>{item1.terms.policyRevival}</div>
                                            <hr />

                                        </div>
                                    </React.Fragment>

                                )
                            })}
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleBuyPolicy}>
                            Proceed to Buy
                        </Button>{" "}
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
export default withTranslation()(SuggestedPolicy);