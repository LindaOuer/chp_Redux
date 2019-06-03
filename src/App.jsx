import React from "react";
import Card from "./components/Card.jsx";
import Form from "./components/Form.jsx";

import "./App.css";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Infos</h2>
      <Card />
    </div>
    <div className="col-md-4 offset-md-1">
      <Form />
    </div>
  </div>
);
export default App;
