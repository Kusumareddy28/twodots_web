// src/Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-20 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
