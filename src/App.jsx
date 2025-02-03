import "./App.css";
import Footer from "./components/Footer/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import Home from "./pages/Home/index.jsx";

export default function App() {
  return (
    <div className="container">
      <Navbar texto="Filmes" />

      <main className="main">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
