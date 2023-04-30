import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard";

export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    );
  }