import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddMemory from "./pages/AddMemory";
import MyMemories from "./pages/MyMemories";
import ViewMemory from "./pages/ViewMemory";
import EditMemory from "./pages/EditMemory";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addmemory" element={<AddMemory />} />
        <Route path="/mymemories" element={<MyMemories />} />
        <Route path="/viewmemory" element={<ViewMemory />} />
        <Route path="/editmemory" element={<EditMemory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/forgot-password" element={<ForgotPassword />} />
       <Route path="/editprofile" element={<EditProfile />} />
       
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;