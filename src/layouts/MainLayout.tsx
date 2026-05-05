import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";

import Sidebar from "../components/navigation/Sidebar";

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="flex h-16 items-center gap-4 border-b bg-white px-4">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          >
            <Menu size={24} />
          </button>

          <h1 className="text-lg font-semibold text-gray-800">
            Sistema de Gestión
          </h1>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
