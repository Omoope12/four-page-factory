import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            <Link to="/" className="flex items-center hover:text-orange-500 transition-colors">
              <img 
                src="/lovable-uploads/f3a7b031-e2a8-4d15-a1b2-dbeb5ac5f465.png" 
                alt="Da Nu Breed Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <div className="hidden sm:flex sm:space-x-4">
              <Link to="/" className={`nav-link ${isActive("/")}`}>
                Home
              </Link>
              <Link to="/about" className={`nav-link ${isActive("/about")}`}>
                About
              </Link>
              <Link to="/services" className={`nav-link ${isActive("/services")}`}>
                Services
              </Link>
              <Link to="/contact" className={`nav-link ${isActive("/contact")}`}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;