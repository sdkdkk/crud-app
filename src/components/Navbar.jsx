import { AppBar, Toolbar,makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const usestyle=makeStyles({
    header :{
        background:'#f18973'
    } ,
    tabs:{
        color:'#ffffff',
        textDecoration:'none',
        marginRight:20 ,
        fontSize:20
    }
})


const Navbar =()=>{ 
    const classes=usestyle();
    return(
        <AppBar className={classes.header} position="static">
            <Toolbar>
            <NavLink className={classes.tabs} to='/' exact>LOGIN</NavLink> 
            <NavLink className={classes.tabs} to='All' exact>ALL USER</NavLink> 
            <NavLink className={classes.tabs} to='Add' exact>ADD USER</NavLink>
            </Toolbar>
        </AppBar>
    )
} 
export default Navbar;