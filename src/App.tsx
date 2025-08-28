import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import HomePage from "./component/home/HomePage";
import WomenPage from "./component/women/WomenPage";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 border-4 border-gray-300 border-t-purple-600 rounded-full animate-spin"></div>
          <p className="text-white text-6xl mt-4 animate-pulse">Euphoria</p>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/women" element={<WomenPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
