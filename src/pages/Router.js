// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Navbar from "./layout/Navbar";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import LoginApp from "./pages/LoginApp";
// import SalesHome from "./pages/SalesHome";
// import ShowSalesEmployee from "./pages/ShowSalesEmployee";
// import Contactus from "./users/Contactus";
// import EditUser from "./users/EditUser";
// import ProductsCard from "./users/ProductsCard";
// import UserLogin from "./users/UserLogin";
// import UserSignup from "./users/UserSignup";
// import ViewUser from "./users/ViewUser";


// export default function Router() {
//   const routes = useRoutes([
//     {
//       path: '/dashboard',
//       element: <Home />,
//       children: [
//         { element: <Navigate to="/dashboard/app" />, index: true },
//         { path: 'app', element: <DashboardAppPage /> },
//         { path: 'user', element: <UserPage /> },
//         { path: 'products', element: <ProductsPage /> },
//         { path: 'blog', element: <BlogPage /> },
//       ],
//     },
//     {
//       path: 'login',
//       element: <LoginPage />,
//     },
//     {
//       path: 'signup',
//       element: <SignupPage />,
//     },
//     {
//       element: <SimpleLayout />,
//       children: [
//         { element: <Navigate to="/login" />, index: true },
//         { path: '404', element: <Page404 /> },
//         { path: '*', element: <Navigate to="/404" /> },
//       ],
//     },
//     {
//       path: '*',
//       element: <Navigate to="/404" replace />,
//     },
//   ]);

//   return routes;
// }