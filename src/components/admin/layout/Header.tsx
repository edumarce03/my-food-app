import { useAuth } from "../../../hooks/useAuth";

const Header = () => {
  const { logout, user } = useAuth();

  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">
        Panel de Administración
      </h1>

      <div className="flex items-center">
        <span className="mr-4 text-gray-600">{user?.email}</span>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Cerrar Sesión
        </button>
      </div>
    </header>
  );
};

export default Header;
