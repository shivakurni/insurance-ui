import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class BuyProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            formData: {
                policyId: localStorage.getItem("policyId"),
                name: '',
                dob: '',
                address: '',
                mobileNo: '',
                email: '',
                nomineeName: '',
                nomineeRelation: ''
            }
        }
    }

    handleChange = (event) => {
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({
            fields
        });


        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    buy = (event) => {
        event.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["name"] = "";
            fields["mobileNo"] = "";
            fields["dob"] = "";
            fields["address"] = "";
            fields["email"] = "";
            fields["nomineeName"] = "";
            
            this.setState({ fields: fields });
            alert("Form submitted");
        }


        const { formData } = this.state;
        var global = this;
        axios.post('http://10.117.189.210:9093/insurance/optPolicy', formData).then(function (response) {
            if (response.data.statusCode === 401) {
            }
            else {                
                global.props.history.push('./policyConfirm')
            }
        }).catch(function (err) {
           
        })
    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "*Please enter your username.";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["name"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["mobileNo"]) {
            formIsValid = false;
            errors["mobileNo"] = "*Please enter your mobile no.";
        }

        if (typeof fields["mobileNo"] !== "undefined") {
            if (!fields["mobileNo"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobileNo"] = "*Please enter valid mobile no.";
            }
        }

        if (!fields["dob"]) {
            formIsValid = false;
            errors["dob"] = "*Please enter your Date of Birth.";
        }

        if (typeof fields["dob"] !== "undefined") {
            if (!fields["dob"].match((/^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.](19|20)[0-9]{2})$/))) {
                formIsValid = false;
                errors["dob"] = "*Please enter valid mobile no.";
            }
        }

        if (!fields["address"]) {
            formIsValid = false;
            errors["address"] = "*Please enter your Address.";
        }


        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your Email.";
        }

        if (!fields["nomineeName"]) {
            formIsValid = false;
            errors["nomineeName"] = "*Please enter your Email.";
        }

      
        this.setState({
            errors: errors
        });
        return formIsValid;


    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="box col-md-4">
                        <div className="user-details">
                            User Details:
                        </div>

                        <div className="sign">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" value={this.state.fields.name} className="form-control" placeholder="Enter Name" name="name" required onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.name}</div>

                            </div>

                            <div className="form-group">
                                <label>DOB</label>
                                <input type="date"  value={this.state.fields.dob} className="form-control" placeholder="Date Of Birth" name="dob" required onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.dob}</div>
                            </div>

                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" value={this.state.fields.address} className="form-control" placeholder="Enter your Address" name="address" required onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.address}</div>
                            </div>

                            <div className="form-group">
                                <label>Mobile Number</label>
                                <input type="number" value={this.state.fields.mobileNo} className="form-control" placeholder="Mobile Number" name="mobileNo" required onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.mobileNo}</div>
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" value={this.state.fields.email} className="form-control" placeholder="Enter Email" name="email" required onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.email}</div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-1"></div>

                    <div className="box col-md-4">
                        <div className="user-details">
                            Nominee Details:
                        </div>

                        <div className="sign">
                            <div className="form-group">
                                <label>Nominee Name</label>
                                <input type="text"  value={this.state.fields.nomineeName} className="form-control" placeholder="Enter Nominee Name" name="nomineeName" required onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.nomineeName}</div>
                            </div>

                            <div className="form-group">
                                <label>Relationship Type:</label>
                                <select onChange={this.handleChange} name="nomineeRelation" className="form-control">
                                    <option>Mom</option>
                                    <option>Dad</option>
                                    <option>Wife</option>
                                    <option>Husband</option>
                                    <option>Brother</option>
                                    <option>Sister</option>
                                </select>
                            </div>
                        </div>
                    </div>


                </div >
                <button type="button" className="btn btn-info reg-btn" onClick={this.buy}>Buy</button>

            </div>
        )
    }
}

export default BuyProduct;
