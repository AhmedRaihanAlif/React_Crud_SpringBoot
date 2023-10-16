import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function RequisitionForm() {
 
  const { user_id } = useParams();
  console.log("type of "+typeof(user_id));
  const [formData, setFormData] = useState({
    users_id:user_id,
    itemName: "",
    quantity: "",
    reason: "",
    neededDate: "",
    status:"pending"
  });
  const { users_id,itemName,quantity,reason,neededDate ,status } = formData;

  let navigate = useNavigate();

  console.log("userid for requisition : "+user_id);

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contacts/requisition/post", formData);
    console.log("Pass to home after request ");
    navigate("/showemployee");
   };

  return (
    <div>
      <h2 value={user_id}>Stock Requisition Form</h2>
      <form onSubmit={(e) => onSubmit(e)}  style={{marginLeft:"15%",padding:"30px", display: 'flex', flexDirection: 'row' }}>
        <div>
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            
            name="itemName"
            value={itemName}
            onChange={(e) => onInputChange(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            
            name="quantity"
            value={quantity}
            onChange={(e) => onInputChange(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="reason">Reason:</label>
          <textarea
            
            name="reason"
            value={reason}
            onChange={(e) => onInputChange(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="neededDate">Needed Date:</label>
          <input
            type="date"
            
            name="neededDate"
            value={neededDate}
            onChange={(e) => onInputChange(e)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        </form>
       
     
    </div>
  );
}

export default RequisitionForm;
