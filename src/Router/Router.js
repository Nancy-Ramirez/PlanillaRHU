import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/Dashboard";
import { Login } from "../Components/Login/Login";

export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/inicio" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    );
  }