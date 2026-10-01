import './Header.css';

export default function BottomHeader() {
  return (
    <header className="bottom-header">
      <div className="bottom-header-container">
        <div className="logo">
          <h2>E-Store<span>.</span></h2>
        </div>

        <nav className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#">Shop All</a>
          <a href="#">Electronics</a>
          <a href="#">Beauty</a>
          <a href="#">Fashion</a>
          <a href="#">Deals</a>
        </nav>

        <div className="header-actions">
          <button className="icon-btn">
            👤 <span>Account</span>
          </button>
          <button className="cart-btn-header">
            🛒 <span className="cart-count">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
