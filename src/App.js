import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./components/Resume";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
