import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home"
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./context/theme-context";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ToastContainer theme="light"  />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
