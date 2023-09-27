// // import Button from '@mui/material/Button';
// // import Dialog from '@mui/material/Dialog';
// // import DialogActions from '@mui/material/DialogActions';
// // import DialogContent from '@mui/material/DialogContent';
// // import DialogContentText from '@mui/material/DialogContentText';
// // import DialogTitle from '@mui/material/DialogTitle';
// // import TextField from '@mui/material/TextField';
// // import * as React from 'react';

// // export default function FormDialog() {
// //   const [open, setOpen] = React.useState(false);

// //   const handleClickOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleClose = () => {
// //     setOpen(false);
// //   };

// //   return (
// //     <div>
// //       <Button variant="outlined" onClick={handleClickOpen}>
// //         Open form dialog
// //       </Button>
// //       <Dialog open={open} onClose={handleClose}>
// //         <DialogTitle>Subscribe</DialogTitle>
// //         <DialogContent>
// //           <DialogContentText>
// //             To subscribe to this website, please enter your email address here. We
// //             will send updates occasionally.
// //           </DialogContentText>
// //           <TextField
// //             autoFocus
// //             margin="dense"
// //             id="name"
// //             label="Email Address"
// //             type="email"
// //             fullWidth
// //             variant="standard"
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleClose}>Cancel</Button>
// //           <Button onClick={handleClose}>Subscribe</Button>
// //         </DialogActions>
// //       </Dialog>
// //     </div>
// //   );
// // }

// import axios from "axios";
// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import VerificationInput from "react-verification-input";
// import OtpInput from "otp-input-react";

// export default function FormDialog() {
//   const [verification, setVerification] = useState({
//   user_otp:""
   
 
//   });
//   const {user_otp}=verification;
  
//   let navigate = useNavigate();
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:5000/api/contacts/compareOtp", verification);
//     console.log("Created");
//     navigate("/");
//    };
//   return (
  
//     <div >
//       <h1> GIVE VERIFICATON CODE HERE </h1>
//       <div style={{marginLeft:"40%",marginTop:"5%"}} >
     
// <VerificationInput name="user_otp"   />

//     </div>
//     <form onSubmit={(e) => onSubmit(e)}>
//     <button 
//                      className="btn btn-danger mx-2"
//                      style={{marginTop:"10px"}}
//                      type="submit"
//                   >
//                     Submit
//                    </button>
//                    </form>
//     </div>
//   )
// }


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
