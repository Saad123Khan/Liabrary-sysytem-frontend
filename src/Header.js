import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';

function Header() {
  return (
    <div className="App">
             
            <Box sx={{p:2, border: "20px solid grey" , backgroundColor:'orange'}}>
            <h1>Book Management Sytem</h1>
           <NavLink style={{fontSize : 30 , color : 'black'}} activeClassName = "active-class" to="/userlist" >UserList</NavLink>
            <NavLink style={{fontSize : 30 , paddingLeft : '40px' , color : 'black'}}activeClassName = "active-class" to="/booklist">BookList</NavLink>
            <NavLink style={{fontSize : 30 , color : 'black' , paddingLeft : '40px'}} activeClassName = "active-class" to="/user" >UserEdit</NavLink>
            <NavLink style={{fontSize : 30 , paddingLeft : '40px' , color : 'black'}}activeClassName = "active-class" to="/book">BookEdit</NavLink>
            </Box>
             
    </div>
  );
}

export default Header;
