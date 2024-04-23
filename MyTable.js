// Import necessary dependencies and styles
import { useState } from 'react';
import './MyTable.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

// Define MyTable component
function MyTable(){

    // Define an array of user data
    const users=[

        {
            fname: "Joshua",
            lname: "Rice",
            city: "Birdsboro"
        },
        {
            fname: "Sarah",
            lname: "Beiler",
            city: "Lancaster"
        },
        {
            fname: "Ava",
            lname: "Andrew",
            city: "Reading"
        },
        {
            fname: "Adeline",
            lname: "Jenks",
            city: "Oley"
        }

    ]

    // Define state variable for search key
    const [searchKey, setSearchKey] = useState('');

    // Function to handle input change for search
    const inputChange = (event) => {
        setSearchKey(event.target.value);
    }

    // Filter users based on search key
    let filteredUsers = users.filter((criteria) => {
        let newCriteria = criteria.fname + criteria.lname + criteria.city;
        return newCriteria.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase());
    })

    // Render JSX markup to display table of users
    return (
        <>
            <h1>My Table Page</h1>
            <h2>List of Users</h2>
            {/* Input field for search */}
            <input type="text" name="" id="" placeholder='Search' onChange={inputChange}/>
            {/* Table to display user data */}
            <Table striped>
                {/* Table header */}
                <thead className='table-dark'>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>City</th>
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
                            <td>
                                {/* Buttons for edit, update, and delete operations */}
                                <Button variant="warning mx-2" size='sm'>Edit</Button>
                                <Button variant="info mx-2" size='sm'>Update</Button>
                                <Button variant="danger mx-2" size='sm'>Delete</Button>
                            </td>
                        </tr>
                    ))}           
                </tbody>
            </Table>
        </>
    );
}

// Export MyTable component
export default MyTable;
