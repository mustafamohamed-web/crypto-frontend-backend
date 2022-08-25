import "./App.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main";
import Market from "./components/Market";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </Router>
  );
}

export default App;
