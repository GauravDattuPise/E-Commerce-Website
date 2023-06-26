
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import DashBoard from "./pages/user/DashBoard";
import Private from "./components/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/dash-board" element={<Private />}> 
        <Route path="user" element={<DashBoard />} />
      </Route>
      <Route path="/dash-board" element={<AdminRoute/>}>
         <Route path="admin" element={<DashBoard/>} />
      </Route>

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  );
}

export default App;
