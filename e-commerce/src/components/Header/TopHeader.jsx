import './Header.css';

export default function TopHeader() {
  return (
    <div className="top-header">
      <div className="top-header-container">
        <div className="top-header-left">
          <span>Free Express Shipping on Orders Over $50! 🚀</span>
        </div>
        <div className="top-header-right">
          <a href="#">Help Center</a>
          <a href="#">Order Tracking</a>
          <select className="lang-select">
            <option value="en">USD $ | EN</option>
          </select>
        </div>
      </div>
    </div>
  );
}