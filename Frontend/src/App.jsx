import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/RegistrationForm.jsx";
import UserList from "./pages/UserList.jsx";
import UpdateUser from "./components/UpdateUser.jsx";

function App() {
  return (
    <Router>
      <div className="h-screen w-screen bg-cover flex items-center justify-center bg-[#222222]">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/updateuser/:id" element={<UpdateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
