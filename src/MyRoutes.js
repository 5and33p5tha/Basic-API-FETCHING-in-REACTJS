import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import UserProfiles from "./GithubUserData";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserProfiles />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
