import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./components/ApplicationViews";


export function App() {
  return (
    <div className="App">
      <Router>
          <ApplicationViews />
      </Router>
    </div>
  );
}

export default App