
//import { Card,CardBody,CardTitle,CardText,CardBtn ,CardImage,CardRipple} from '@material-ui/core';
import axios from "axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBRipple
} from 'mdb-react-ui-kit';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../layout/ProductsCard.css';
import '../users/Re.js';
import Users from "../users/Re.js";
export default function ProductsCard() {

  const { product_id } = useParams();
  const [users, setUsers] = useState([]);
  
const [def,setDef]=useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.getProducts(`http://localhost:5000/api/contacts/${product_id}`);
     setUsers(result.data);
  };
  function onClickbut(){
  alert(Users[0].defination);
  }
 
  
  return (
   

   
    <MDBCard className="d-flex flex-row "  id='mdb1' style={{width:"80%",marginLeft:"20%"}} >
              
      <div id='i1' >
      <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://us.remarkhb.com/wp-content/uploads/2022/04/herlan.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Nior Store</MDBCardTitle>
        {/* <MDBCardText>
        {Users[0].name}
        </MDBCardText> */}
        <MDBCardText onClick={onClickbut}>
        Show Moto
        </MDBCardText>
        <MDBBtn href='https://us.siodil.com/'>Show Details</MDBBtn>
        {/* <MDBBtn onClick={onClickbut}>Show Details</MDBBtn> */}
      </MDBCardBody>
      </div>
      <div>
        {/* <Card>
          <CardRipple>
            <CardImage>

            </CardImage>
          </CardRipple>
          <CardBody>
<CardTitle>
Nior Store
</CardTitle>
<CardText>
Some quick example text to build on the card title and make up the bulk of the card's content.
  </CardText>
  <CardBtn Show Details></CardBtn>
          </CardBody>

        </Card> */}
      </div>

      <div id='i1'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://us.remarkhb.com/wp-content/uploads/2022/04/blazeoskin.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Nior Store</MDBCardTitle>
        <MDBCardText onClick={onClickbut}>
        Show Moto
        </MDBCardText>
        <MDBBtn href='https://us.siodil.com/'>Show Details</MDBBtn>
      </MDBCardBody>
      </div>

      <div id='i1'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://us.remarkhb.com/wp-content/uploads/2022/04/siodil.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Herlan Store</MDBCardTitle>
        <MDBCardText onClick={onClickbut}>
        Show Moto
        </MDBCardText>
        <MDBBtn href='https://us.siodil.com/'>Show Details</MDBBtn>
      </MDBCardBody>
      </div>

      <div id='i1'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://us.remarkhb.com/wp-content/uploads/2022/04/orix.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Herlan Store</MDBCardTitle>
        <MDBCardText onClick={onClickbut}>
        Show Moto
        </MDBCardText>
        <MDBBtn href='https://us.siodil.com/'>Show Details</MDBBtn>
      </MDBCardBody>
      </div>
      <div id='i1'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://us.remarkhb.com/wp-content/uploads/2022/04/elan-Venezia.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Nior Store</MDBCardTitle>
        <MDBCardText onClick={onClickbut}>
        Show Moto
        </MDBCardText>
        <MDBBtn href='https://us.siodil.com/'>Show Details</MDBBtn>
      </MDBCardBody>
      </div>
      <div id='i1'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://us.remarkhb.com/wp-content/uploads/2022/04/tylox.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Nior Store</MDBCardTitle>
        <MDBCardText onClick={onClickbut}>
        Show Moto
        </MDBCardText>
        <MDBBtn href='https://us.siodil.com/'>Show Details</MDBBtn>
      </MDBCardBody>
      </div>
      <div id='i1'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://us.remarkhb.com/wp-content/uploads/2022/04/lily-2.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Nior Store</MDBCardTitle>
        <MDBCardText onClick={onClickbut}>
        Show Moto
        </MDBCardText>
        <MDBBtn href='https://us.siodil.com/'>Show Details</MDBBtn>
      </MDBCardBody>
      </div>
      <div id='i1'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://us.remarkhb.com/wp-content/uploads/2022/04/SUNBIT-1-400x353.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Nior Store</MDBCardTitle>
        <MDBCardText onClick={onClickbut}>
        Show Moto
        </MDBCardText>
        <MDBBtn href='https://us.siodil.com/'>Show Details</MDBBtn>
      </MDBCardBody>
      </div>
      <div id='i1'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://us.remarkhb.com/wp-content/uploads/2022/06/nior516.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Nior Store</MDBCardTitle>
        <MDBCardText onClick={onClickbut}>
        Show Moto
        </MDBCardText>
        <MDBBtn href='https://us.siodil.com/'>Show Details</MDBBtn>
      </MDBCardBody>
      </div>
      <div id='i1'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://us.remarkhb.com/wp-content/uploads/2022/04/ACNOL-2-400x353.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Nior Store</MDBCardTitle>
        <MDBCardText onClick={onClickbut}>
        Show Moto
        </MDBCardText>
        <MDBBtn href='https://us.siodil.com/'>Show Details</MDBBtn>
      </MDBCardBody>
      </div>
      <div id='i1'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://us.remarkhb.com/wp-content/uploads/2023/01/Cavotin1937-400x353.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Nior Store</MDBCardTitle>
        <MDBCardText onClick={onClickbut}>
        Show Moto
        </MDBCardText>
        <MDBBtn href='#'>Show Details</MDBBtn>
      </MDBCardBody>
      </div>
      <div id='i1'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://us.remarkhb.com/wp-content/uploads/2023/03/littleone.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Nior Store</MDBCardTitle>
        <MDBCardText onClick={onClickbut}>
        Show Moto
        </MDBCardText>
        <MDBBtn href='#'>Show Details</MDBBtn>
      </MDBCardBody>
      </div>
      
      
    </MDBCard>


      );
}