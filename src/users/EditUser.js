import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { user_id } = useParams();

  const [user, setUser] = useState({
    id:user_id,
    email: ""
    
  });

 //const { name,  email } = user;

  // const onInputChange = (e) => {
  //   setUser({ ...user, [e.target.email]: e.target.value });
  // };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/contacts/${user_id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:5000/api/contacts/${user_id}`);
    console.log("heioioi"+JSON.stringify(result.data[0].email));
    setUser({ ...user, email: result.data[0].email});
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                User ID
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your new name"
                name="name"
                value={user.id}
            
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your new e-mail address"
                name="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Age
              </label>
              <input
                type={"text"}

                className="form-control"
                placeholder="Enter your new age"
                name="age"
                value={age}
                onChange={(e) => onInputChange(e)}
              />
            </div> */}
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}