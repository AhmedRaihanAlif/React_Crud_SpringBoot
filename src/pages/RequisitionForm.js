import React, { useState } from "react";
import { useParams } from "react-router-dom";

function RequisitionForm() {
  const [formData, setFormData] = useState({
    itemName: '',
    quantity: '',
    reason: '',
    neededDate: '',
  });
  const { user_id } = useParams();
  console.log("userid for requisition : "+user_id);
  const [user, setUser] = useState({
    id:user_id,
    
    
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the form data to your server or perform any other actions here
    console.log(formData);
  }

  return (
    <div>
      <h2 value={user_id}>Stock Requisition Form</h2>
      <form onSubmit={handleSubmit} style={{marginLeft:"15%",padding:"30px", display: 'flex', flexDirection: 'row' }}>
        <div>
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="reason">Reason:</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="neededDate">Needed Date:</label>
          <input
            type="date"
            id="neededDate"
            name="neededDate"
            value={formData.neededDate}
            onChange={handleChange}
            required
          />
        </div>
        </form>
        <button type="submit">Submit</button>
     
    </div>
  );
}

export default RequisitionForm;
