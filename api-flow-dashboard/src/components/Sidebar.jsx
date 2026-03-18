import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">⚡</span>
        <span className="logo-text">API Flow</span>
      </div>
      
      <nav className="sidebar-nav">
        <a href="#" className="nav-item active">
          <span className="nav-icon">📊</span>
          Dashboard
        </a>
        <a href="#" className="nav-item">
          <span className="nav-icon">🔗</span>
          Workflows
        </a>
        <a href="#" className="nav-item">
          <span className="nav-icon">📝</span>
          Logs
        </a>
        <a href="#" className="nav-item">
          <span className="nav-icon">⚙️</span>
          Settings
        </a>
      </nav>
    </aside>
  );
}
