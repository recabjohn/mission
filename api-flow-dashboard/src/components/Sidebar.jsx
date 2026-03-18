import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">M</span>
        <span className="logo-text">Mission</span>
      </div>
      
      <nav className="sidebar-nav">
        <a href="#" className="nav-item active">
          <span className="nav-icon">📊</span>
          Home
        </a>
      </nav>
    </aside>
  );
}
