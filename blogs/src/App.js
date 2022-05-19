import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Blogs from "./Blogs";
import BlogDetail from "./BlogDetail";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route exact path="/detail/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
