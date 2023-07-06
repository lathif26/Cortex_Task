import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserTable from "./UserTable";
import UserDetails from "./UserDetails";
import UserForm from "./UserForm";

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/users/:id/update" element={<UserForm />} />
        <Route path="/userform" element={<UserForm  />} />
      </Routes>
    </Router>
  );
};

export default App;
