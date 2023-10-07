import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetCookie } from "./Cookiess";
import { SearchBar } from "./SearchBox";
import { SearchResultsList } from "./SearchResult";
import Sidebar from "./Sidebar";
export default function ShowEmployee() {
  const [results, setResults] = useState([]);
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const getcookie=GetCookie();
    const headers = {
      "Content-Type" : 'application/json',
      Authorization: `Bearer ${getcookie}`,
    };
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/api/contacts/private/getsales",{headers});
    console.log("After passing header");
    console.log(result);
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/contacts/${id}`);
    loadUsers();
  };
  const [user, setUser] = useState({
    user_id: "",
   user_name:""
    
    
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
              <th scope="col">User Name</th>
              
            
              <th scope="col">Update Action</th>
              <th scope="col">Requisition</th>
              
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
                            <td>{user.user_name}</td>
                        
                     
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
                    to={`/editsalesemployee/${user.user_id}`}
                  >
                     Update
                   </Link>
                   
                          </td>
                          <td>
                            <Link
                     className="btn btn-info mx-2"
                    to={`/requisitionform/${user.user_id}`}
                  >
                     Request
                   </Link>
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