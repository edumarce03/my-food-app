import { NavLink } from "react-router-dom";

const Sidebar = () => {
  // Enlaces de navegación
  const navLinks = [
    { to: "/admin/dashboard", text: "Dashboard", icon: "📊" },
    { to: "/admin/products", text: "Productos", icon: "🍔" },
    { to: "/admin/orders", text: "Pedidos", icon: "📝" },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 flex-shrink-0 h-screen">
      {/* Logo/Brand */}
      <div className="p-4 text-xl font-bold">Admin FastFood</div>

      {/* Navigation */}
      <nav className="mt-8">
        <ul>
          {navLinks.map((link) => (
            <li key={link.to} className="mb-2">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 ${
                    isActive
                      ? "bg-gray-900 border-l-4 border-blue-500"
                      : "hover:bg-gray-700"
                  }`
                }
              >
                <span className="mr-3">{link.icon}</span>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
