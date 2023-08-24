import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Warehouse from "./pages/Warehouse";
import ItemTable from "./pages/ItemTable";
import Dashboard from "./pages/Dashboard";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/items" element={<ItemTable/>} />
        <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
    </Router>
  );
}

export default App;
