import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [bookauthor, setbookauthor] = useState(selectedEmployee.bookauthor);
    const [bookname, setbookname] = useState(selectedEmployee.bookname);  
    const [dateofreturn, setdateofreturn] = useState(selectedEmployee.dateofreturn);
    const [dateofborrow, setdateofborrow] = useState(selectedEmployee.dateofborrow);  

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !bookname || !bookauthor || !dateofreturn || !dateofborrow ) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            bookname,
            bookauthor,
            dateofborrow,
            dateofreturn,

        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName} ${employee.bookname} ${employee.bookauthor} ${employee.dateofborrow} ${employee.dateofreturn}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Book</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
               <label htmlFor="bookname">Book Name</label>
                <input
                    id="bookname"
                    type="text"
                    name="bookname"
                    value={bookname}
                    onChange={e => setbookname(e.target.value)}
                />
                <label htmlFor="bookauthor">Book Author</label>
                <input
                    id="bookauthor"
                    type="text"
                    name="bookauthor"
                    value={bookauthor}
                    onChange={e => setbookauthor(e.target.value)}
                />
                <label htmlFor="dateofborrow">Date Of Borrow</label>
                <input
                    id="dateofborrow"
                    type="text"
                    name="dateofborrow"
                    value={dateofborrow}
                    onChange={e => setdateofborrow(e.target.value)}
                />
                <label htmlFor="dateofreturn">Date Of Return</label>
                <input
                    id="dateofreturn"
                    type="text"
                    name="dateofreturn"
                    value={dateofborrow}
                    onChange={e => setdateofreturn(e.target.value)}
                />

                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit