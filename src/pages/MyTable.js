// Import necessary dependencies and styles
import { useState } from 'react'; // Importing the useState hook from React for managing state
import Button from 'react-bootstrap/Button'; // Importing Button component from react-bootstrap library
import Table from 'react-bootstrap/Table'; // Importing Table component from react-bootstrap library
import { Container, Form, Row, Col } from 'react-bootstrap'; // Importing Container, Form, Row, and Col components from react-bootstrap library

// Define MyTable component
function MyTable() {

    // Define an array of user data and a state setter function to update it
    const [users , setUsers] = useState([ // Using the useState hook to define state variable 'users' and its setter function 'setUsers' with initial value
        {
            fname: "Joshua",
            lname: "Rice",
            city: "Ephrata",
            age: 36
        },
        // Sample user data
    ]);

    // State variables for form inputs
    const [firstName, setFirstName] = useState(''); // State variable 'firstName' and its setter function
    const [lastName, setLastName] = useState(''); // State variable 'lastName' and its setter function
    const [location, setLocation] = useState(''); // State variable 'location' and its setter function
    const [currentAge, setCurrentAge] = useState(''); // State variable 'currentAge' and its setter function

    // Event handlers for form inputs
    const firstNameHandler = (event) => { // Function to handle changes in the first name input field
        setFirstName(event.target.value); // Updating the state variable 'firstName' with the new value
    };

    // Similar event handlers for lastName, location, and currentAge

    // State variable for search key and its setter function
    const [searchKey, setSearchKey] = useState('');

    // Function to handle input change for search
    const inputChange = (event) => { // Function to handle changes in the search input field
        setSearchKey(event.target.value); // Updating the state variable 'searchKey' with the new value
    };

    // Filter users based on search key
    let filteredUsers = users.filter((criteria) => { // Filtering the users array based on search criteria
        let newCriteria = criteria.fname + criteria.lname + criteria.city + criteria.age; // Combining user properties for search
        return newCriteria.toLowerCase().includes(searchKey.toLowerCase()); // Returning true if search criteria match user data
    });

    // Function to handle form submission
    const formSubmit = (event) => { // Function to handle form submission when adding a new user
        event.preventDefault(); // Preventing the default form submission behavior
        // Create a new entry for the user
        let newEntry = {
            fname: firstName,
            lname: lastName,
            city: location,
            age: currentAge
        };
        // Create a new array by spreading the existing users array and adding the new entry
        let usersCopy = [...users, newEntry];
        // Update the state with the new array
        setUsers(usersCopy);
    };

    // Function to handle delete operation for a user
    const handleDelete = (i) => { // Function to handle deletion of a user from the table
        let userCopy = [...users]; // Creating a copy of the users array
        userCopy.splice(i, 1); // Removing the user at index 'i' from the copied array
        setUsers(userCopy); // Updating the state with the modified array
    };

    // Function to handle edit operation for a user
        const editItem = (index) => {
        // Set form inputs with user data for editing
        let targetItem = users[index];
        setFirstName(targetItem.fname);
        setLastName(targetItem.lname);
        setLocation(targetItem.city);
        setCurrentAge(targetItem.age);
        settargetId(index);
        setEditing(false);
    };

    const [targetId, settargetId] = useState(0);

    // Function to handle update operation for a user
    const updateHandler = (event) => {
        event.preventDefault();
        let usersCopy = [...users];
        let targetItem = usersCopy[targetId];
        
        // Update the target user object properties
        targetItem.fname = firstName;
        targetItem.lname = lastName;
        targetItem.city = location;
        targetItem.age = currentAge;
        // Set the updated array of users
        setUsers(usersCopy);
        // Reset form inputs and editing mode
        setFirstName('');
        setLastName('');
        setLocation('');
        setCurrentAge('');
        setEditing(true);
    };


    // State variable to track if editing mode is enabled
    const [isEditing, setEditing] = useState(true);

    

    // Render JSX markup to display table of users
    return (
        <>
            <Container>
                <Row>
                    {/* Form for adding new user */}
                    <Col md={4}>
                        <Form onSubmit={isEditing ? formSubmit : updateHandler}>
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
                                <Form.Control type="text" placeholder="Enter City" value={location} onChange={locationHandler}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Enter Age : </Form.Label>
                                <Form.Control type="number" placeholder="Enter Age" value={currentAge} onChange={currentAgeHandler}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                {isEditing ? (<Button variant="primary" type='submit'>Submit</Button>) : (<Button variant="info" type='submit'>Update</Button>)}
                            </Form.Group>
                        </Form>
                    </Col>
                    {/* Display table of users */}
                    <Col md={8}>
                        <h1>My Table Page</h1>
                        <h2>List of Users</h2>
                        {/* Input field for search */}
                        <input className="mb-4" type="text" name="" id="" placeholder='Search' value={searchKey} onChange={inputChange}/>
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
                                            {/* Buttons for edit and delete operations */}
                                            <Button variant="warning mx-2" size='sm' onClick={() => editItem(index)}>Edit</Button>
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
