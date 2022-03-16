import {FormGroup,Input,FormControl,Button,makeStyles,Typography} from '@material-ui/core';
import { useState } from 'react'; 
import {addUser1} from '../service/api'; 
import { useNavigate } from 'react-router-dom';


// import {useHistory} from 'react-router-dom';

const usestyle=makeStyles({
    container:{
        width:'50%' ,
        margin:'5% 0 0 25%', 
        '&>*':{
            marginTop:20
        }
    }
})

const initialValue={
    name:'',
    username:'',
    email:'',
    phone:''

}



const AddUser=()=>{  
    const [user,setuser]=useState(initialValue); 
    const {name,username,email,phone}=user;
    const classes=usestyle();  
    let navigate=useNavigate();
    // const history =useHistory();

    const onValueChange=(e)=>{
        // console.log(e.target.value);
        setuser({...user,[e.target.name]:e.target.value}) 
        // console.log(user);
    }

    const addUserDetails=async()=>{
        console.log(user);
        console.log("abc");
        await addUser1(user); 
        // history.push('./all');
        // navigate.push("/All"); 
        navigate("/All")
    }

    return(
        <FormGroup className={classes.container}> 
        <Typography variant='h4'>ADD USER</Typography>
            <FormControl>
                <inputLable htmlFor="my-input">Name</inputLable> 
                <Input onChange={(e)=>onValueChange(e)} name='name' value={name} id="my-input"/>
            </FormControl> 
            <FormControl>
                <inputLable htmlFor="my-input">Username</inputLable> 
                <Input onChange={(e)=>onValueChange(e)} name='username' value={username} id="my-input"/>
            </FormControl> 
            <FormControl>
                <inputLable htmlFor="my-input">Email</inputLable> 
                <Input onChange={(e)=>onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl> 
            <FormControl>
                <inputLable htmlFor="my-input">Phone</inputLable> 
                <Input onChange={(e)=>onValueChange(e)} name='phone' value={phone} id="my-input"/>
            </FormControl> 
            <Button variant='contained' onClick={()=>addUserDetails()} color='primary'>Add User</Button> 
            
        </FormGroup>
    );
}
export default AddUser;