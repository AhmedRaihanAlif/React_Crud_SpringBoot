import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


import { SearchBar } from "./SearchBox";
import { SearchResultsList } from "./SearchResult";
import Sidebar from "./Sidebar";

export default function RequisitionRequestList() {
  const [results, setResults] = useState([]);
  const [users, setUsers] = useState([]);
const [req,setReq]=useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
    
  }, []);
 

//   const getcookie = GetCookie();
//   const headers = {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${getcookie}`,
//   };
  const loadUsers = async () => {
    const result = await axios.get(
      "http://localhost:5000/api/contacts/requisitionrequestlist/get",
      
    );
    console.log("After passing header");
    console.log(result);
    setUsers(result.data);
    console.log(result);
    //requestusers();
  };
//   const requestusers = async () => {
//     const result = await axios.get(
//       "http://localhost:5000/api/contacts/requisition/get"
//     );
//     console.log("After passing message ");
//    // alert(result.data);
//    setReq(result.data);
//    console.log(result.data);
    
   
//   };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/contacts/${id}`);
    loadUsers();
  };
  const [user, setUser] = useState({
    user_id: "",
    user_name: "",
    item_name:"",
    quantity:"",
    reason:"",
    needed_date:""
  });

  return (
    <div
      className="container"
      style={{ display: "flex", maxWidth: "100%", backgroundColor: "white" }}
    >
      <Sidebar />
   
      
      <div style={{ display: "flex", flexDirection: "column" }}>
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && (
          <SearchResultsList results={results} />
        )}

        <div className="py-4" style={{ marginRight: "00px" }}>
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Serial</th>
                <th scope="col">User ID</th>
                <th scope="col">User Name</th>
                <th scope="col">Item Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Reason</th>
                <th scope="col">Needed Date</th>
                <th scope="col">Edit Action</th>
                <th scope="col">Accept Action</th>
                <th scope="col">Cancel Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{user.user_id}</td>
                  <td>{user.user_name}</td>
                  <td>{user.item_name}</td>
                  <td>{user.quantity}</td>
                  <td>{user.reason}</td>
                  <td>{user.needed_date}</td>
                  <td>
                    <Link
                      className="btn btn-info mx-2"
                      to={`/editrequisitionrequest/${user.user_id}`}
                    >
                      Update
                    </Link>
                  </td>

                  {/* <td>
                            <button
                     className="btn btn-danger mx-2"
                     //onClick={() => deleteUser(user.id)}
                   >
                     View
                   </button>
                          </td> */}
               
                  <td>
                    <button
                      className="btn btn-info mx-2"
                      onClick={() => deleteUser(user.user_id)}
                    >
                      Accept
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteUser(user.user_id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
