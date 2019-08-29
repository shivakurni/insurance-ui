import React, { Component } from 'react';
import axios from 'axios';
import './buyProduct.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



class BuyProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
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
        const { formData } = this.state;
        //console.log(event.target.value);
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
        console.log(this.state.formData);
    }

    // register = () => {
    //     const { formData } = this.state;
    //     const { notification } = this.state;
    //     var global = this;
    //     console.log(formData);
    //     axios.post('http://10.117.189.137:8087/matrimony/profile', formData).then(function (response) {
    //         if (response.data.statusCode === 401) {
    //             alert(response.data.message)
    //         }
    //         else {
    //             alert("Registration Success");
    //             global.props.history.push('./login')
    //         }
    //     }).catch(function (err) {
    //         console.log(err);
    //     })
    // }

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
                                <input type="text" className="form-control" placeholder="Enter Name" name="name" required onChange={this.handleChange} />
                            </div>


                            <div className="form-group">
                                <label>DOB</label>
                                <input type="date" className="form-control" placeholder="Date Of Birth" name="dob" required onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" className="form-control" placeholder="Enter your Address" name="address" required onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Mobile Number</label>
                                <input type="number" className="form-control" placeholder="Mobile Number" name="mobileNo" required onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" placeholder="Enter Email" name="email" required onChange={this.handleChange} />
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
                                <input type="text" className="form-control" placeholder="Enter Nominee Name" name="nomineeName" required onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Relationship Type:</label>
                                <select onChange={this.handleChange} name="gender" className="form-control">
                                    <option>Mom</option>
                                    <option>Dad</option>
                                    <option>Wife</option>
                                    <option>Husband</option>
                                    <option>Brother</option>
                                    <option>Sister</option>
                                </select>
                            </div>

                            <label></label><br />
                            
                        </div>
                    </div>


                </div >
                <button type="button" className="btn btn-info reg-btn" onClick={this.register}>Buy</button>

            </div>
        )
    }
}

export default BuyProduct;
