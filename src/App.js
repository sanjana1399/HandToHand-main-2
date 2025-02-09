import React from "react";
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommunitySharing from "./components/CommunitySharing";
import SpecialRequests from "./components/SpecialRequests";
import OngoingInitiatives from "./components/OngoingInitiatives";
import VolunteerForm from "./components/VolunteerForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CommunitySharing />} />
      <Route path="/special-requests" element={<SpecialRequests />} />
      <Route path="/ongoing-initiatives" element={<OngoingInitiatives />} />
      <Route path="/volunteer-form" element={<VolunteerForm />} />
    </Routes>
  );
}

export default App;
