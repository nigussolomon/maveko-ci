import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Warehouse from "./pages/Warehouse";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/warehouse" element={<Warehouse />} />
      </Routes>
    </Router>
  );
}

export default App;
