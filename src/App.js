import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./layout/Navbar";
import FormDialog from "./pages/FormDialog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginApp from "./pages/LoginApp";
import SalesHome from "./pages/SalesHome";
import ShowSalesEmployee from "./pages/ShowSalesEmployee";
import Contactus from "./users/Contactus";
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
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/formdialog" element={<FormDialog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;





