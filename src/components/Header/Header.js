import React from 'react';
import './Header.css'
import { Dropdown, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    const users = props.users;
    const totalSalary = users.reduce((prev, curr) => prev + curr.salary, 0);


    return (
        <div className="row bg-dark mb-5 p-3">

            <div className="col-lg-4 col-md-12">
                <h1 className='text-warning mb-0 text-center'>Friend List Collection</h1>
            </div>

            <div className="col-lg-4 col-md-9">
                <Form.Control type='text' value={props.value} onChange={(e) => props.userSearch(e)} placeholder="Search User" />
            </div>

            <div className='col-lg-4 col-md-3'>
                <Dropdown className='text-center'>
                    <Dropdown.Toggle variant="warning btn-lg" id="dropdown-basic">
                        <FontAwesomeIcon className='text-light' icon={faUsers} /> <span className="badge badge-light">{users.length}</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            users.map((user, index) =>
                                <Dropdown.Item key={user.id}>
                                    {index + 1}. {user.name.first} {user.name.last} - ${user.salary}
                                </Dropdown.Item>
                            )
                        }
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Users Total Salary: ${totalSalary}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
};

export default Header;