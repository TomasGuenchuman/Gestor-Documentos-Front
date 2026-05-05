// src/components/navigation/Sidebar.tsx
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Building2,
  FileText,
  Upload,
  ClipboardList,
  Bell,
  BarChart3,
  Settings,
  X,
} from "lucide-react";

type MenuItem = {
  name: string;
  path: string;
  icon: React.ElementType;
};

const menu: MenuItem[] = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Calendar", path: "/calendar", icon: Calendar },
  { name: "Entities", path: "/entities", icon: Building2 },
  { name: "Documents", path: "/documents", icon: FileText },
  { name: "Upload", path: "/documents/upload", icon: Upload },
  { name: "Procedures", path: "/checklists", icon: ClipboardList },
  { name: "Alerts", path: "/alerts", icon: Bell },
  { name: "Reports", path: "/reports", icon: BarChart3 },
  { name: "Settings", path: "/settings", icon: Settings },
];

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-64 flex-col bg-[#172554] text-white
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:sticky md:top-0 md:translate-x-0
        `}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <div>
              <h1 className="font-bold">DocuControl</h1>
              <p className="text-sm text-white/60">Management System</p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1 hover:bg-white/10 md:hidden"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex-1 space-y-1 px-3 py-4">
            {menu.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`
                  }
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
