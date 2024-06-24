import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import ToDoList from "./pages/ToDoList";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from "../utils/ProtectedRoutes";

const App = () => {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<ToDoList />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
