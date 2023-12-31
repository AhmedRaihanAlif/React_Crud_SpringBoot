
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SearchBar } from "./SearchBox";
import { SearchResultsList } from "./SearchResult";
import Sidebar from "./Sidebar";

export default function Home() {
  const [results, setResults] = useState([]);
  const [users, setUsers] = useState([]);

  const { user_id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/api/contacts/");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/contacts/${id}`);
    loadUsers();
  };
  const [user, setUser] = useState({
    user_id: "",
    password:"",
    email: ""
    
  });

  return (



  
    <div className="container" style={{display:"flex",maxWidth:"100%",backgroundColor:"white" }}>
   <Sidebar />
   <div style={{display:"flex",flexDirection:"column"}}>
   <SearchBar setResults={setResults} />
   {results && results.length > 0 && <SearchResultsList results={results} />}
   
      <div className="py-4" style={{marginRight:"100px"}}  >
           
        <table className="table border shadow" >
        
          <thead>
            <tr>
              <th scope="col">Serial</th>
              <th scope="col">User ID</th>
              <th scope="col">Password</th>
              <th scope="col">Email</th>
            
              <th scope="col">Update Action</th>
              <th scope="col">Delete Action</th>
            </tr>
          </thead>
          <tbody>
          {
                    users.map(
                        (user,index)=>(
                            <tr >
                                <th scope="row" key={index}>{index+1}

                                </th>
                            <td>{user.user_id}</td>
                            <td>{user.password}</td>
                            <td>{user.email}</td>
                     
                            {/* <td>
                            <button
                     className="btn btn-danger mx-2"
                     //onClick={() => deleteUser(user.id)}
                   >
                     View
                   </button>
                          </td> */}
                          <td>
                            <Link
                     className="btn btn-info mx-2"
                    to={`/edituser/${user.user_id}`}
                  >
                     Update
                   </Link>
                          </td>
                          <td>
                          <button
                     className="btn btn-danger mx-2"
                     onClick={() => deleteUser(user.user_id)}
                  >
                    Delete
                   </button>
                          </td>
                            
                 </tr>
                        )
                    )
                }

                
          </tbody>
        </table>
      </div>
    </div>
    </div>
   
  );
}