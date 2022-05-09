import { AuthContext } from 'app/contexts/AuthContext';
import { getTokenData } from 'app/utils/functions/getTokenData';
import { isAuthenticated } from 'app/utils/functions/isAuthenticated';
import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';

const Nav: React.FC = () => {
  const { authContextData, setAuthContextData, handleLogout } =
    useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenUserdata: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#dscatalog-navbar"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="dscatalog-navbar">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className=" nav-link" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/products">
              Catálogo
            </NavLink>
          </li>
          {authContextData.authenticated ? (
            <div className="dropdown ">
              <button
                className="btn btn-transparent text-white dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {authContextData.tokenUserdata?.user_name}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <NavLink className="dropdown-item" to="/admin">
                    Meu cadastro
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleLogout}
                    className="dropdown-item"
                    to="/admin/auth/login"
                  >
                    Sair
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink className="nav-link" to="/admin/auth/login">
              Login
            </NavLink>
          )}
        </ul>
      </div>
    </>
  );
};

export { Nav };
