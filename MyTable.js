import { useState } from 'react';
import './MyTable.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function MyTable(){

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

    const [searchKey, setsearchKey] = useState ('');

    const inputChange = (event) => {

        setsearchKey(event.target.value);

    }

    let filteredUsers = users.filter((criteria) => {

        let newCriteria = criteria.fname + criteria.lname + criteria.city;
        return newCriteria.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase());

    })

return (
    <>
        <h1>My Table Page</h1>
        <h2>List of Users</h2>
        <input type="text" name="" id="" placeholder='Search' onChange={inputChange}/>
        <Table striped>
            <thead className='table-dark'>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>City</th>
                    <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {filteredUsers.map((user, index) => (
                    <tr key={index}>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.city}</td>
                    <td>
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
export default MyTable;