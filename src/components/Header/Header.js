import React from 'react';
import './Header.css'
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    const users = props.users;

    const totalSalary = users.reduce((prev, curr) => prev + curr.salary, 0);
    console.log(totalSalary);
    return (
        <div className="row bg-dark mb-5 p-3">
            <div className="col-md-6">
                <h1 className='text-warning'>Friend List Collection</h1>
            </div>
            <div className='col-md-6'>
                <Dropdown>
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