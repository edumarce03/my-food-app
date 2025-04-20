import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/admin/LoginPage";
import DashboardPage from "../pages/admin/DashboardPage";
import ProductsPage from "../pages/admin/ProductsPage";
import OrdersPage from "../pages/admin/OrdersPage";
import AdminLayout from "../components/admin/layout/AdminLayout";
import { useAuth } from "../hooks/useAuth";

const AdminRoutes = () => {
  const { user, loading } = useAuth();

  // Mientras verifica la autenticación
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Cargando...
      </div>
    );
  }

  return (
    <Routes>
      {/* Ruta pública - Login */}
      <Route
        path="/login"
        element={
          !user ? <LoginPage /> : <Navigate to="/admin/dashboard" replace />
        }
      />

      {/* Rutas protegidas - Requieren autenticación */}
      <Route
        path="/"
        element={
          user ? <AdminLayout /> : <Navigate to="/admin/login" replace />
        }
      >
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="orders" element={<OrdersPage />} />
      </Route>

      {/* Redirección por defecto */}
      <Route path="*" element={<Navigate to="/admin/login" replace />} />
    </Routes>
  );
};

export default AdminRoutes;
