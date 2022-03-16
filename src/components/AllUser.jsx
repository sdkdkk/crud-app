import React, { useEffect, useState } from 'react';
import { TableCell, TableRow, Table, TableHead, TableBody,Button } from '@material-ui/core';
import { getUsers } from '../service/api'; 
import { makeStyles } from '@material-ui/core'; 
import { Link } from 'react-router-dom'; 
import { deleteUser } from '../service/api'; 

const usestyle=makeStyles({
  table:{
    width:'90%',
    margin:'50px 0 0 50px'
  }, 
  thead:{
    '&>*':{
      background:'#000000',
      color:'#ffffff',
      fontSize:20
    }
  },

  row:{
    '&>*':{
      fontSize:20
    }
  }

})




const AllUser = () => {

  const [users, setusers] = useState([]); 
  const classes=usestyle();


  useEffect(() => {
    getAllUsers();
  }, [])

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setusers(response.data);
  }

const deleteUserData=async(id)=>{ 
  alert('You want to delete the user');
  await deleteUser(id);
  getAllUsers();
}


  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          users.map(user => (
            <TableRow className={classes.row} key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant='contained' color='primary'component={Link} to={'/edit/${user.id}'} >Edit</Button>
                <Button variant='contained'color='secondary' onClick={() => deleteUserData(user.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
}
export default AllUser;