import React, { useState } from 'react';
import './Users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Users = (props) => {
    const { name: { first, last }, email, phone, picture, salary,
        location: { city, state, country } } = props.users;


    const [btnText, setBtnText] = useState('Add in List');
    const changeText = (text) => setBtnText(text);

    return (
        <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="card mb-4 border-warning">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={picture} className="card-img" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-left">
                            <h4 className="card-title text-warning">{first} {last}</h4>
                            <h6 className="card-text">Phone: {phone}</h6>
                            <h6 className="card-text">Email: {email}</h6>
                            <h6 className="card-text">Monthly Salary: ${salary}</h6>
                            <h6 className="card-text">Address: {city}, {state}, {country}</h6>
                            <button onClick={() => {
                                props.click(props.users);
                                changeText('Added')
                            }} type="button" className="btn btn-warning">
                                <FontAwesomeIcon icon={faUser} /> {btnText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;