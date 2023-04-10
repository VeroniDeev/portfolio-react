import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Competences from "./pages/Competences/Competences";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main co={0} cu={0} />} />
      <Route path="/projet" element={<Main />} />
      <Route path="/competence" element={<Competences />} />
    </Routes>
  );
};

export default App;
