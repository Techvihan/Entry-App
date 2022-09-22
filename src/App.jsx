import React from "react";
import { Route, Routes } from "react-router-dom";
import EntryForm from "./EntryForm";
import EntryList from "./EntryList";
import Home from "./Home";
import TopBar from "./TopBar";
function App() {
  return (
    <div>
      <TopBar></TopBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="form" element={<EntryForm />} />
        <Route path="list" element={<EntryList />} />
      </Routes>
    </div>
  );
}

export default App;
