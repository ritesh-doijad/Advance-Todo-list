import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import DashBoard from "./Pages/DashBoard";
import LoginPage from "./components/Login";

import Header from "./components/Header";

function App() {
  const isAuthenticated = useSelector(
    (state) => state.auth?.isAuthenticated || false
  );

  return (
    <div>
      <Header/>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <DashBoard /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
