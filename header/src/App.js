import React from "react";
import { createBrowserHistory } from "history";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <header style={headerStyle}>
      <p>Micro frontend Header Application</p>
    </header>
  );
}

const headerStyle = {
  backgroundColor: "#f5f5f5",
  height: "2rem",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "#1a2b42",
  textAlign: "center",
  paddingTop: "20px",
  paddingBottom: "20px",
};

export default App;
