
import {FormGroup,Input,FormControl,Typography,Button} from '@material-ui/core'; 
import {makeStyles} from '@material-ui/core'; 
import { useNavigate } from 'react-router-dom';

const usestyle=makeStyles({
    container:{
        width:'50%' ,
        margin:'5% 0 0 25%', 
        
    } 
})


 const Login =()=>{ 

    let navigate=useNavigate();

    const classes=usestyle();

     return(
        <FormGroup  className={classes.container}>
            <Typography></Typography> 
            <FormControl>
                <inputLable htmlFor="my-input">Username</inputLable> 
                
                <Input name='name' id="my-input"/>
            </FormControl> 
            <FormControl>
                <inputLable htmlFor="my-input">Password</inputLable> 
                <Input  name='username' id="my-input"/>
            </FormControl>  
            <Button onClick={()=>{navigate("/Add")}} variant='contained' color='secondary' color='Danger'>Login</Button>
        </FormGroup>
     )
 }
 export default Login