import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

import { Routes, Route } from "react-router-dom";
import { useThemeStore } from "./store/useThemeStore";

import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";

function App() {
  const { theme } = useThemeStore();

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300" data-theme={theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
