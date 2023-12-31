import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./layout/Navbar";
import EditRequisitionRequest from "./pages/EditRequisitionRequest";
import FormDialog from "./pages/FormDialog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginApp from "./pages/LoginApp";
import RequisitionForm from "./pages/RequisitionForm";
import RequisitionRequestList from "./pages/RequisitionRequestList";
import SalesHome from "./pages/SalesHome";
import ShowEmployee from "./pages/ShowEmployee";
import ShowSalesEmployee from "./pages/ShowSalesEmployee";
import Contactus from "./users/Contactus";
import EditSalesEmployee from "./users/EditSalesEmployee";
import EditUser from "./users/EditUser";
import ProductsCard from "./users/ProductsCard";
import UserLogin from "./users/UserLogin";
import UserSignup from "./users/UserSignup";
import ViewUser from "./users/ViewUser";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/usersignup" element={<UserSignup />} />
          <Route exact path="/userlogin" element={<UserLogin/>} />
          <Route exact path="/saleshome" element={<SalesHome />} />
          <Route exact path="/showsalesemployee" element={<ShowSalesEmployee />} />
          <Route exact path="/loginapp" element={<LoginApp />} />
          <Route exact path="/contactus" element={<Contactus />} />
          <Route exact path="/productscard" element={<ProductsCard />} />
          <Route exact path="/showemployee" element={<ShowEmployee />} />
          <Route exact path="/editsalesemployee/:user_id" element={<EditSalesEmployee />} />
          <Route exact path="/edituser/:user_id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/formdialog" element={<FormDialog />} />
          <Route exact path="/editrequisitionrequest/:user_id" element={<EditRequisitionRequest />} />
          <Route exact path="/requisitionrequestlist" element={<RequisitionRequestList />} />
          <Route exact path="/requisitionform/:user_id" element={<RequisitionForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;





