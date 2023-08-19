import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginApp from "./pages/LoginApp";
import Sidebar from "./pages/Sidebar";
import AddUser from "./users/AddUser";
import Contactus from "./users/Contactus";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

import ProductsCard from "./users/ProductsCard";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/loginapp" element={<LoginApp />} />
          <Route exact path="/contactus" element={<Contactus />} />
          <Route exact path="/productscard" element={<ProductsCard />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
