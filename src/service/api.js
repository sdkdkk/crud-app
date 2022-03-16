import axios from 'axios'; 

const url=' http://localhost:3000/users'; 

// export const getUsers= async(id)=>{ 
//     id=id || '';
//     return await axios.get(url);
// } 

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}


export const addUser1 =async(user)=>{
    console.log(user);
    return await axios.post(url,user);
    
}  

export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`, user)
}



export const deleteUser = async (id) => {
    return await axios.delete(`http://localhost:3000/users/${id}`);
} 

