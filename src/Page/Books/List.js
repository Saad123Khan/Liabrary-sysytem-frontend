import React from 'react'
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit'
import DeleteForever from '@mui/icons-material/DeleteForever';
function List({ employees, handleEdit, handleDelete }) {

    return (
        <Box sx={{m:2,p:2, border: "2px solid grey"}}>
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr style = {{ border : "2px solid grey"}}>
                        <th style = {{ border : "2px solid grey" , textAlign:'center'}}>No.</th>
                        <th style = {{ border : "2px solid grey" , textAlign:'center'}}>First Name</th>
                        <th style = {{ border : "2px solid grey" , textAlign:'center'}}>Last Name</th>
                        <th style = {{ border : "2px solid grey" , textAlign:'center'}}>Book Name</th>
                        <th style = {{ border : "2px solid grey" , textAlign:'center'}}>Book Author</th>
                        <th style = {{ border : "2px solid grey" , textAlign:'center'}}>Date Of Borrow</th>
                        <th style = {{ border : "2px solid grey" , textAlign:'center'}}>Date Of Return</th>
                        <th colSpan={2} className="text-center" style = {{ border : "2px solid grey" , textAlign:'center'}}> 
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td style = {{textAlign:'center'}}>{i + 1}</td>
                                <td style = {{textAlign:'center'}}>{employee.firstName}</td>
                                <td style = {{textAlign:'center'}}>{employee.lastName}</td>
                                <td style = {{textAlign:'center'}}>{employee.bookname}</td>
                                <td style = {{textAlign:'center'}}>{employee.bookauthor}</td>
                                <td style = {{textAlign:'center'}}>{employee.dateofborrow}</td>
                                <td style = {{textAlign:'center'}}>{employee.dateofreturn}</td>
                                <td className="text-right">
                                    <button style={{color : 'green',textAlign:'center'}}
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                        Edit <EditIcon></EditIcon>
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button style={{color : 'red',textAlign:'center'}}
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button"
                                    >
                                        Delete <DeleteForever></DeleteForever>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </Box>
    )
}

export default List