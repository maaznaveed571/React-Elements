import Sidebar from "../components/common/sidebar";

const SidebarExamples = () => {
  return (
    <div className="flex items-center">
      <Sidebar />
      <pre className="bg-gray-900 text-green-300 !p-3 h-[98dvh] rounded-lg overflow-x-auto">
        <code>
          {`import { useLocation } from "react-router-dom";

interface NavItem {
  id: string;
  label: string;
  icon?: string;
  href: string;
}

const navigationItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: "📊", href: "/dashboard" },
  { id: "projects", label: "Projects", icon: "📁", href: "/projects" },
  { id: "team", label: "Team", icon: "👥", href: "/team" },
  { id: "analytics", label: "Analytics", icon: "📈", href: "/analytics" },
  { id: "settings", label: "Settings", icon: "⚙️", href: "/settings" },
  { id: "profile", label: "Profile", icon: "👤", href: "/profile" },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="h-[100dvh] !px-[1rem] !flex !items-center">
      <div className="bg-linear-to-r from-cyan-300 to-blue-600 h-[98dvh] w-fit flex flex-col items-center !p-2 !py-[2rem] text-white rounded-full">
        <div className="!mb-8">
          <img src="/vite.svg" alt="" />
        </div>
        <nav>
          <ul className="!space-y-2">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={\`space-x-3 h-[60px] w-[60px] flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-blue-50/30 \${location.pathname === item.href ? "bg-blue-50/30" : ""}\`}
                >
                  {item.icon && <span className="text-lg">{item.icon}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;`}
        </code>
      </pre>
    </div>
  );
};

export default SidebarExamples;
