


import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
function FormDialog() {
  // State to store the verification code entered by the user
  const [verificationCode, setVerificationCode] = useState('');

  const verify = {
    "verificationcode": verificationCode 
    
  };
  // Function to handle changes in the input field
  const handleInputChange = (e) => {
    const code = e.target.value;
    setVerificationCode(code);
  };
  let navigate = useNavigate();
  // Function to handle form submission (you can add your logic here)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(verificationCode);
    const responsee= await axios.post("http://localhost:5000/api/contacts/compareOtp", verify);
    // You can perform further actions with the verificationCode here
    console.log("responsee"+JSON.stringify(responsee.data));

    console.log('Verification Code:', verificationCode);
    const propertyToCompare = responsee.data;
    const booleanValue = true;
    console.log('propertyToCompare:', propertyToCompare);
    console.log('booleanValue:', booleanValue);
   if(propertyToCompare.data===booleanValue){
    navigate("/");
    // Reset the input field
    setVerificationCode('');
   }
    else{
      console.log("Go to hell MF")
    }
  };

  return (
    <div>
      <h2>Enter Verification Code</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Verification Code"
          value={verificationCode}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </   div>
  );
}

export default FormDialog;
