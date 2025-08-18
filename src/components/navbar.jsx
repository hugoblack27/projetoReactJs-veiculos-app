import "../css/navbar.css"

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          Home
        </a>
      </div>
      <div className="navbar-center">
        <ul className="navbar-links">
          <li>
            <a href="/produtos">Produtos</a>
          </li>
          <li>
            <a href="/sobre-nos">Sobre-nós</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="/cart" className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">0</span>
        </a>
        <a href="/account" className="user-icon">
          <i className="fas fa-user"></i>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
