import "./App.css";
import Footer from "./components/Footer/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import MoviesList from "./pages/Movies/index.jsx";

export default function App() {
  return (
    <div className="container">
      <Navbar texto="Meus Filmes" />

      <main className="main">
        <MoviesList />
      </main>

      <Footer />
    </div>
  );
}
