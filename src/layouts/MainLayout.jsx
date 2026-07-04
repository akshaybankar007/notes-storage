import { Outlet, Link } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="layout-container">
      <header className="app-header">
        <Link to="/" style={{ textDecoration: 'none', cursor: 'pointer', color: 'inherit' }}>
          <h1>
            <span>{'</>'}</span>Technical Interview & Full-Stack Engineering Guide
          </h1>
        </Link>
      </header>

      <div className="content-wrapper">
        <aside className="sidebar">
          {/* Sidebar content removed for a clean interface */}
        </aside>

        <main className="main-content">
          <Outlet />
        </main>
      </div>

      <footer className="app-footer">
        Akshay Bankar @2026
      </footer>
    </div>
  );
}