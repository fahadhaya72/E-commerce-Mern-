import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShoppingCart, User, LogOut, Store, Upload, Menu, X } from 'lucide-react';
import anime from 'animejs';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  React.useEffect(() => {
    anime({
      targets: '.navbar-item',
      translateY: [-20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      duration: 800,
      easing: 'easeOutExpo',
    });
  }, []);

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="navbar-item flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="Crafter Tannu Logo" 
                className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
              />
              <span className="text-lg sm:text-xl font-bold text-gray-900">Crafter Tannu</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {isAuthenticated ? (
              <>
                {user?.role === 'admin' ? (
                  <>
                    <Link
                      to="/admin/dashboard"
                      className={`navbar-item px-3 py-2 rounded-md text-sm font-medium ${
                        isActive('/admin/dashboard')
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/admin/upload-product"
                      className={`navbar-item px-3 py-2 rounded-md text-sm font-medium ${
                        isActive('/admin/upload-product')
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Upload className="h-4 w-4 inline mr-1" />
                      Upload
                    </Link>
                    <Link
                      to="/admin/manage-products"
                      className={`navbar-item px-3 py-2 rounded-md text-sm font-medium ${
                        isActive('/admin/manage-products')
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Manage
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/shop"
                      className={`navbar-item px-3 py-2 rounded-md text-sm font-medium ${
                        isActive('/shop')
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <ShoppingCart className="h-4 w-4 inline mr-1" />
                      Shop
                    </Link>
                  </>
                )}
                
                <div className="navbar-item flex items-center space-x-2 px-3 py-2">
                  <User className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-700 hidden sm:block">{user?.name}</span>
                  <span className="text-sm text-gray-700 sm:hidden">{user?.name?.split(' ')[0]}</span>
                </div>
                
                <button
                  onClick={handleLogout}
                  className="navbar-item flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:block">Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`navbar-item px-3 py-2 rounded-md text-sm font-medium ${
                    isActive('/login')
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className={`navbar-item px-3 py-2 rounded-md text-sm font-medium ${
                    isActive('/signup')
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Signup
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {isAuthenticated ? (
                <>
                  {user?.role === 'admin' ? (
                    <>
                      <Link
                        to="/admin/dashboard"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                          isActive('/admin/dashboard')
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/admin/upload-product"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                          isActive('/admin/upload-product')
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Upload className="h-4 w-4 inline mr-2" />
                        Upload Product
                      </Link>
                      <Link
                        to="/admin/manage-products"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                          isActive('/admin/manage-products')
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        Manage Products
                      </Link>
                    </>
                  ) : (
                    <Link
                      to="/shop"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        isActive('/shop')
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <ShoppingCart className="h-4 w-4 inline mr-2" />
                      Shop
                    </Link>
                  )}
                  
                  <div className="px-3 py-2 text-sm text-gray-700">
                    <User className="h-4 w-4 inline mr-2" />
                    {user?.name}
                  </div>
                  
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                  >
                    <LogOut className="h-4 w-4 inline mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive('/login')
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive('/signup')
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
