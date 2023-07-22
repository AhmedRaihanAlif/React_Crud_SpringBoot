import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/v1/student");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/api/v1/student/${id}`);
    loadUsers();
  };
  const [user, setUser] = useState({
    name: "",
    email: "",
    dob: "",
    age: ""
  });

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              
              <th scope="col">Email</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Age</th>
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
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.dob}</td>
                            <td>{user.age}</td>
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
                     className="btn btn-danger mx-2"
                    to={`/edituser/${user.id}`}
                  >
                     Update
                   </Link>
                          </td>
                          <td>
                          <button
                     className="btn btn-danger mx-2"
                     onClick={() => deleteUser(user.id)}
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
  );
}
