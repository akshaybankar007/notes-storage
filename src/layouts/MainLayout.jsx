import { Outlet, NavLink } from 'react-router-dom';
import { modules } from '../config/modules';

export default function MainLayout() {
  return (
    <div className="layout-container">
      <header className="app-header">
        <h1>StackPrep</h1>
        <p>Software Engineer & MERN Stack Readiness</p>
      </header>

      <div className="content-wrapper">
        <aside className="sidebar">
          <h3>Modules</h3>
          <nav>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Dashboard
            </NavLink>
            {modules.map((mod) => (
              <NavLink
                key={mod.slug}
                to={`/${mod.slug}`}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                {mod.label}
              </NavLink>
            ))}
          </nav>
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
