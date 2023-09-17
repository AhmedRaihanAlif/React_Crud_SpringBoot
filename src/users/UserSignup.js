import axios from "axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow
} from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../layout/UserSignup.css";
const {GetCookie}=require("../pages/Cookiess");
function UserSignup() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    user_id: "",
    user_name: "",
    user_password:"",
    user_role:""
 
  });

  const { user_id, user_name,user_password,user_role } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 const gett=GetCookie();
 console.log("gett"+gett);
 const gf=JSON.stringify(gett);
 console.log("gfgf"+gf);

  const headers = {
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ${gf}', // Example authorization header
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contacts/usersignup", user, { headers });
    console.log("Created");
    navigate("/");
  };

  return (
    
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best place <br />
            <span className="text-primary">for your <strong>Health</strong> & <strong>Cosmatics</strong> business</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
          <h1 >Create New Employee</h1>
            <MDBCardBody className='p-5'>
       
              {/* <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
                </MDBCol>
              </MDBRow> */}
   <form onSubmit={(e) => onSubmit(e)}>
              <MDBInput wrapperClass='mb-4' label='Employee Id' id='form1' type={"text"} name="user_id" value={user_id}  onChange={(e) => onInputChange(e)} placeholder='Enter Unique Employee ID'/>
              <MDBInput wrapperClass='mb-4' label='Employee Name' id='form1' type={"text"} name="user_name" value={user_name}  onChange={(e) => onInputChange(e)}  placeholder='Enter Unique Employee Name'/>
              <MDBInput wrapperClass='mb-4' label='Employee Password' id='form1' type={"text"} name="user_password" value={user_password}  onChange={(e) => onInputChange(e)} placeholder='Enter Employee Password'/>
              <MDBInput wrapperClass='mb-4' label='Employee Role' id='form1' type={"text"} name="user_role" value={user_role}  onChange={(e) => onInputChange(e)} placeholder='Enter Employee Role'/>
              {/* <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              </div> */}

              <MDBBtn className='w-100 mb-4' type="submit" size='md'>Create Employee</MDBBtn>

              {/* <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div> */}
</form>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default UserSignup;