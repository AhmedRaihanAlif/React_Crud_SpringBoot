import axios from "axios";
import { MDBBtn, MDBCheckbox, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../layout/UserLogin.css";

const {SetCookie, GetCookie}=require("../pages/Cookiess");
//const jwt =require("jsonwebtoken");
function UserLogin() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    user_id: "",
    user_password:"",
 });
const [response, setResponse] = useState('');
 const { user_id, user_password } = user;
const [userRole,setRole]=useState();



//   const SetCookie = (response) => {
//     console.log("aisi setcookie e ");
//     console.log(response);
//     // const tokenn = response.split(' ')[1];
//     // console.log(tokenn);
//     const token =  response.access_token ;
//    // console.log(token);
//     console.log("Helloooooooooooooo");
//     var base64Url = token.split('.')[1];
//     var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));

//    const decoded = JSON.parse(jsonPayload);

// console.log(decoded);

// const {user_id,user_name,user_role}=decoded;

// console.log(decoded);
// console.log(user_id);
// console.log(user_name);
// console.log(user_role);
// setRole("user_role");
// console.log(userRole);
// // const fresponse=response.data.access_token
//   // console.log(fresponse);

//   // const u = jwt(response.data);
//   // console.log(" setcookie e ");
//   // console.log(u);
//   // console.log(u.user_id);
//   // console.log(u.user_name);
//   // console.log(u.user_role);
//   // setResponse(u);
//   // console.log(response);
 
  

//     Cookies.set("tokenn", jsonPayload, {
//       expires: 10,
//     });
//     console.log("Set Cookies");
//     GetCookie();
    
//   };
//     // Method to get data from cookies
//     const GetCookie = () => {
//       console.log(Cookies.get("tokenn"));
//   alert(Cookies.get("tokenn"));
     
//     };
  
//     // Method to remove data from cookies
//     const RemoveCookie = () => {
//       Cookies.remove("tokenn");
//     };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
   
 const response = await axios.post("http://localhost:5000/api/contacts/userlogin", user);
 console.log(response);
 SetCookie(response.data.access_token);
 //console.log(userRole);
 console.log("Created");
  // const getcookie=GetCookie();
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${getcookie.accessToken}`,
  //   };
  navigate("/showsalesemployee");
  };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
        <form onSubmit={(e) => onSubmit(e)}>
          {/* <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <MDBBtn floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

          </div> */}

          {/* <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div> */}

          <MDBInput wrapperClass='mb-4' label='Enter Employee ID' id='formControlLg' type="text" name="user_id" value={user_id}  onChange={(e) => onInputChange(e)} placeholder='Enter Employee ID' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Enter Password' id='formControlLg' type='password' name="user_password" value={user_password}  onChange={(e) => onInputChange(e)} placeholder='Enter Employee Password'  size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" type="submit" size='lg'>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/usersignup" className="link-danger">Register</a></p>
          </div>
          </form>

        </MDBCol>

      </MDBRow>

      {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>

        <div>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='twitter' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='google' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='linkedin-in' size="md"/>
          </MDBBtn>

        </div>

      </div> */}

    </MDBContainer>
  );
}

export default UserLogin;