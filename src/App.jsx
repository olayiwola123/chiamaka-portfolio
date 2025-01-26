
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<LandingPage />} />
       
{/* 
      
         <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
        <Route path="/sign-up" element={<MainLayout><Signup /></MainLayout>} />  */}
    
      </Routes>
    </Router>
  );
};

export default App;

