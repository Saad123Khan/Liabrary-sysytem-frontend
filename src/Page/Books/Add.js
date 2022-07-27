import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bookauthor, setbookauthor] = useState('');
    const [bookname, setbookname] = useState('');  
    const [dateofreturn, setdateofreturn] = useState('');
    const [dateofborrow, setdateofborrow] = useState('');  
  
  
    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!bookname || !bookauthor || !dateofreturn || !dateofborrow ) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required except firstname lastname.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            bookname,
            bookauthor,
            dateofborrow,
            dateofreturn,
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${bookname} ${bookauthor} ${firstName} ${lastName}${dateofborrow} ${dateofreturn}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Books</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
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
                    type="date"
                    name="dateofborrow"
                    value={dateofborrow}
                    onChange={e => setdateofborrow(e.target.value)}
                />
                <label htmlFor="dateofreturn">Date Of Return</label>
                <input
                    id="dateofreturn"
                    type="date"
                    name="dateofreturn"
                    value={dateofreturn}
                    onChange={e => setdateofreturn(e.target.value)}
                />

                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add