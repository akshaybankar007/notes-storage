import { Outlet, NavLink } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="layout-container">
      <header className="app-header">
        <h1>DevPrep Hub</h1>
        <p>Software Engineer & MERN Stack Readiness</p>
      </header>
      
      <div className="content-wrapper">
        <aside className="sidebar">
          <h3>Modules</h3>
          <nav>
            <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Dashboard</NavLink>
            <NavLink to="/java" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Java Mastery</NavLink>
            {/* Future modules will go here */}
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