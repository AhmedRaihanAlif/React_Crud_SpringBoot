import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditRequisitionRequest() {
  let navigate = useNavigate();

  const { user_id } = useParams();

  const [user, setUser] = useState({
    id:user_id,
    user_name:"",
    item_name:"",
    quantity:"",
    reason:"",
    date:""
    
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
    const result = await axios.get(`http://localhost:5000/api/contacts/requisitionrequestlistper/getper/${user_id}`);
    // console.log("heioioi"+JSON.stringify(result.data[0].user_name));
     setUser({ ...user, user_name: result.data[0].user_name,item_name:result.data[0].item_name,quantity:result.data[0].quantity,reason:result.data[0].reason,date:result.data[0].date});
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
              <label htmlFor="Name" className="form-label">
                User Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your new name"
                name="user_name"
                value={user.user_name}
            
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
               Quantity
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your new quantity"
                name="quantity"
                value={user.quantity}
            
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Reason
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your new name"
                name="reason"
                value={user.reason}
            
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Date
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your new name"
                name="date"
                value={user.date}
            
              />
            </div>

            
            {/* <div className="mb-3">
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
            </div> */}
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