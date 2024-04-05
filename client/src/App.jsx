import { React, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx";
import Profile from "./Components/profile.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import { Contact } from "./Components/ContactUs";
import Header2 from "./Components/Header2.jsx";
import Logout from "./Components/Logout.jsx";
import My_Resume from "./Components/My_Resume.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Show from "./Components/Show.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Export from "./Components/Export.jsx";

const PrivetRoute = () => {
  console.log("inside privet route");
  const userData = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  console.log({ token });
  return token == "true" ? (
    <>
      {toast.success("Login Sucessfully")}
      <Header2></Header2>
      {console.log("inside outlet  :- ", token)}
      <Outlet></Outlet>
    </>
  ) : (
    <>
      {toast.success("Logout Sucessfully")}
      <Header></Header>
      {console.log("inside outlet  :- ", token)}
      {<Navigate replace to="/login"></Navigate>}
    </>
  );
};

const App = () => {
  // const [isAuthenticated,setAuthenticated] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer></ToastContainer>

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<PrivetRoute></PrivetRoute>}>
            <Route path="/" element={<Home> </Home>}></Route>
            {/* <Route path="/" element={<Home> </Home>}></Route>  */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/about" element={<About />} />
            <Route path="/myresume" element={<My_Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dow" element={<Export />} />
            <Route path="/showResume/:id" element={<Show></Show>} />
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
