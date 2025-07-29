import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="layout-wrapper">
      <nav className="layout-nav">
        {!isHomePage && (
          <Link to="/" className="home-link">
            Центр “Здоровая Жизнь”
          </Link>
        )}
      </nav>
      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  );
}
