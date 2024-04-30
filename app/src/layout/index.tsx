import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="h-screen overflow-hidden">
      {/* Top Menu */}
      <div className="h-[4vh] flex flex-row items-center justify-between gap-4 container">
        <h1 className="font-semibold">Fast-growing restaurant management platform</h1>
        <nav className="list-none flex flex-row items-center space-x-4 font-semibold">
          <li>
            <Link to="/">Restaurants</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </nav>
      </div>
      <div className="border-t py-4">
        <div className="bg-background">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
