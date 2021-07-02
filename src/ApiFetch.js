import React, { useState, useEffect } from "react";
import './ApiFetch.css';
function ApiFetch({Word}) {

  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    setUsers(await response.json());

  }
  useEffect(() => {
    getUsers();
  }, []);


  return (

    <div className="container-fluid">


      <table className="table table-hover table-dark">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No.</th>
          </tr>
        </thead>
        <tbody>
          {users.filter((val)=>{
            if(Word=="")
            {
              return val
            }
            else if(val.username.toLowerCase().includes(Word.toLowerCase()))
            {
              return val
            }
            
          }).map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.username}</td>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>

  );
}
export default ApiFetch;