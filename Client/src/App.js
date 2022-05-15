import "./App.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main";
import Market from "./components/Market";
import Login from "./components/form/Login";

import Form from "./components/form/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign" element={<Form />} />
        <Route path="/market" element={<Market />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
