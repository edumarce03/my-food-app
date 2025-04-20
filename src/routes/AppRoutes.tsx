import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
// import ClientRoutes from "./ClientRoutes"; // Implementaremos después

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        {/* Redirección temporal a admin mientras implementamos las rutas del cliente */}
        <Route path="/*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
