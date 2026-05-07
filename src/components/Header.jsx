function Header() {
  return (
    <header className="header">
      <h2>My React App</h2>

      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
        </ul>
      </nav>

      <button className="signup-btn">
        Sign Up
      </button>
    </header>
  );
}

export default Header;