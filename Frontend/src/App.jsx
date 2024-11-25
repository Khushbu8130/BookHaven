
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";

import Signup from "./components/Signup";
import Courses from "./components/courses/Courses";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Contacts from "./components/contact/Contacts";
import About from "./components/About";


function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Toaster />


    </>
  )
}

export default App
