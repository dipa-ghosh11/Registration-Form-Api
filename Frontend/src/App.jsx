import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/RegistrationForm.jsx";
import UserList from "./pages/UserList.jsx";

function App() {
  return (
    <Router>
      <div className="h-screen w-screen bg-cover flex items-center justify-center bg-[#222222]">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
