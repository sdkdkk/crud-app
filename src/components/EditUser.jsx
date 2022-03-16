import {FormGroup,Input,FormControl,Button,makeStyles,Typography} from '@material-ui/core';
import { useEffect, useState } from 'react'; 
import {addUser1, getUsers} from '../service/api'; 
import { useParams } from 'react-router-dom'; 
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
const EditUser=()=>{  
    const [user,setuser]=useState(initialValue); 
    const {name,username,email,phone}=user; 
    const {id}= useParams(); 
    let navigate=useNavigate();
    

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setuser(response.data);
    }
    

    const loadUserData=async()=>{
        const response=await getUsers(id); 
        setuser(response.data)
    }

    const classes=usestyle(); 
    // const history =useHistory();

    const onValueChange=(e)=>{
        // console.log(e.target.value);
        setuser({...user,[e.target.name]:e.target.value}) 
        // console.log(user);
    }

    const editUserDetails=async()=>{
        console.log(user);
        console.log("abc");
        await addUser1(user); 
        navigate("/All")
        // history.push('./all');
    }

    return(
        <FormGroup className={classes.container}> 
        <Typography variant='h4'>Edit User</Typography>
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
            <Button variant='contained' onClick={()=>editUserDetails()} color='primary'>Edit User</Button>
        </FormGroup>
    );
}
export default EditUser;