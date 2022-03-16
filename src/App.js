
import Navbar from './components/Navbar'; 
import Login from './components/Login';
import AllUser from './components/AllUser'; 
import AddUser from './components/AddUser'; 
import {Route,Routes} from 'react-router-dom';
import EditUser from './components/EditUser';


function App() {
  return (
    <>
    <Navbar/> 
    <Routes>
      
    <Route exact path='/' element={<Login/>}/> 
    <Route exact path='/Add' element={ <AddUser/>}/> 
    <Route exact path='/All' element={<AllUser/>}/>
    <Route exact path='/edit/:id' element={<EditUser/>}/> 
    
    
    </Routes>
    
    </>
  );
}

export default App;
