import React from 'react'
import Box from '@mui/material/Box';
function List({ employees}) {

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
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr style={{textAlign : 'center'}} key={employee.id}>
                                <td style={{textAlign : 'center'}} >{i + 1}</td>
                                <td style={{textAlign : 'center'}}>{employee.firstName}</td>
                                <td style={{textAlign : 'center'}} >{employee.lastName}</td>
                                <td style={{textAlign : 'center'}}>{employee.bookname}</td>
                                <td style={{textAlign : 'center'}}>{employee.bookauthor}</td>
                                <td style={{textAlign : 'center'}}>{employee.dateofborrow}</td>
                                <td style={{textAlign : 'center'}}>{employee.dateofreturn}</td>
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