import React from 'react'
import Box from '@mui/material/Box';

function List({ employees}) {
    return (
        
        <Box sx={{m:2,p:2, border: "2px solid grey"}}>
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr style = {{ border : "2px solid grey" , textAlign:'center'}}>

                    <th style = {{ border : "2px solid grey" , textAlign:'center'}}>No.</th>
                        <th style = {{ border : "1px solid grey" , textAlign:'center'}}>First Name</th>
                        <th style = {{ border : "1px solid grey" , textAlign:'center'}}>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td style={{textAlign : 'center'}} >{i + 1}</td>
                                <td style={{textAlign : 'center' }}  >{employee.firstName}</td>
                                <td style={{textAlign : 'center'}} >{employee.lastName}</td>
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