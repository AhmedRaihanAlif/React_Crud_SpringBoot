import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Select from 'react-select';
export default function Login() {
  let navigate = useNavigate();

  const { id } = useParams();
  const Countries = [
    { label: "Role 1", value: 1 },
    { label: "Role 2", value: 2 },
    { label: "Role 0", value: 0 },
   
  ];
  const [user, setUser] = useState({
    eid: "",
   password: "",
  });

  const { eid, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  


  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/api/contacts/${id}`, user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Login</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Employee ID
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your new name"
                name="eid"
                value={eid}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Employee Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Employee Mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Employee Phone Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your phone number"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Password
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="container" style={{color: "red",width:'500px'}}>
        <div className="row">
          <div className="col-md-0"></div>
          <div className="col-md-0">
            <Select  options={Countries} />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>

            
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
