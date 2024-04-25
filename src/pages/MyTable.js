// Import necessary dependencies and styles
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Container, Form, Row, Col } from 'react-bootstrap';

// Define MyTable component
function MyTable(){

    // Define an array of user data
    const [users , setUsers] = useState([
        {
            fname: "Joshua",
            lname: "Rice",
            city: "Ephrata",
            age: 36
        },
        {
            fname: "Sarah",
            lname: "Beiler",
            city: "Narvon",
            age: 35
        },
        {
            fname: "Ava",
            lname: "Rice",
            city: "Reading",
            age: 6
        },
        {
            fname: "Adeline",
            lname: "Rice",
            city: "Wyomissing",
            age: 2
        }
    ])

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [Location, setLocation] = useState('');
    const [currentAge, setcurrentAge] = useState();

    const firstNameHandler = (event) => {

        setfirstName(event.target.value);

    }

    const lastNameHandler = (event) => {

        setlastName(event.target.value);

    }

    const LocationHandler = (event) => {

        setLocation(event.target.value);

    }

    const currentAgeHandler = (event) => {

        setcurrentAge(event.target.value);

    }

    // Define state variable for search key
    const [searchKey, setSearchKey] = useState('');

    // Function to handle input change for search
    const inputChange = (event) => {
        setSearchKey(event.target.value);
    }

    // Filter users based on search key
    let filteredUsers = users.filter((criteria) => {
        let newCriteria = criteria.fname + criteria.lname + criteria.city + criteria.age;
        return newCriteria.toLowerCase().includes(searchKey.toLowerCase());
    })

    // Function to handle click event for test button
const formSubmit = (event) => {
    event.preventDefault();
    // Create a new entry for the user
    let newEntry = {
        fname: firstName,
        lname: lastName,
        city: Location,
        age: currentAge
    };
    // Create a new array by spreading the existing users array and adding the new entry
    let usersCopy = [...users, newEntry];
    // Update the state with the new array
    setUsers(usersCopy);
};

    // Function to handle delete operation for a user
    const handleDelete = (i) => {
        let userCopy = [...users];
        userCopy.splice(i, 1);
        setUsers(userCopy);
    }

    // Render JSX markup to display table of users
    return (
        <>
            <Container>
                <Row>
                    {/* Form for adding new user */}
                    <Col md={4}>
                        <Form onSubmit={formSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Enter First Name: </Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={firstNameHandler}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Enter Last Name: </Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" value={lastName} onChange={lastNameHandler}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Enter City: </Form.Label>
                                <Form.Control type="text" placeholder="Enter City" value={Location} onChange={LocationHandler}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Enter Age : </Form.Label>
                                <Form.Control type="number" placeholder="Enter Age" value={currentAge} onChange={currentAgeHandler}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Button variant="primary" type='submit'>Submit</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    {/* Display table of users */}
                    <Col md={8}>
                        <h1>My Table Page</h1>
                        <h2>List of Users</h2>
                        {/* Input field for search */}
                        <input  className="mb-4" type="text" name="" id="" placeholder='Search' value={searchKey} onChange={inputChange}/>
                        {/* Table to display user data */}
                        <Table striped>
                            {/* Table header */}
                            <thead className='table-dark'>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>City</th>
                                    <th>Age</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Map over filtered users and render each user row */}
                                {filteredUsers.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.fname}</td>
                                        <td>{user.lname}</td>
                                        <td>{user.city}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            {/* Buttons for edit, update, and delete operations */}
                                            <Button variant="warning mx-2" size='sm'>Edit</Button>
                                            <Button variant="info mx-2" size='sm'>Update</Button>
                                            <Button variant="danger mx-2" size='sm' onClick={() => handleDelete(index)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}           
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

// Export MyTable component
export default MyTable;
