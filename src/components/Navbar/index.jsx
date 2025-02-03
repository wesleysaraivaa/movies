import "./Navbar.css";

const Navbar = ({ texto }) => {
  return (
    <nav className="navbar">
      <h1>{texto}</h1>
      <div>
        <a href="#"> Filmes </a>
        <p>Series...</p>
      </div>
    </nav>
  );
};

export default Navbar;
