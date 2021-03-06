import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.module.css';

import { FaShoppingCart, FaUserFriends, FaHome, FaTag } from 'react-icons/fa';
import { AuthContext } from 'app/contexts/AuthContext';
import { isAuthenticated } from 'app/utils/functions/isAuthenticated';
import { getTokenData } from 'app/utils/functions/getTokenData';
import { HasAnyRoles } from 'app/utils/functions/HasAnyRoles';

type LayoutDashBoardProps = {
  title: string;
  children: React.ReactNode;
};

const LayoutDashBoard: React.FC<LayoutDashBoardProps> = ({
  children,
  title,
}) => {
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
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/admin">
          DS Catalog
        </Link>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="navbar-nav"></div>
        {authContextData.authenticated && (
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
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link className="dropdown-item" to="/admin">
                  Meu cadastro
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLogout}
                  className="dropdown-item"
                  to="/admin/auth/login"
                >
                  Sair
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className={`col-md-3 col-lg-2 d-md-block bg-light sidebar collapse`}
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                {HasAnyRoles(['ROLE_ADMIN', 'ROLE_OPERATOR']) && (
                  <>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        aria-current="page"
                        to="/admin"
                      >
                        <span data-feather="home">
                          <FaHome className="me-2" />
                        </span>
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/admin/products">
                        <span data-feather="shopping-cart">
                          <FaShoppingCart className="me-2" />
                        </span>
                        Produtos
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/admin/categories">
                        <span data-feather="shopping-cart">
                          <FaTag className="me-2" />
                        </span>
                        Categ??rias
                      </NavLink>
                    </li>
                  </>
                )}
                {HasAnyRoles(['ROLE_ADMIN']) && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin/users">
                      <span data-feather="users">
                        <FaUserFriends className="me-2" />
                      </span>
                      Users
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </nav>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">{title}</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                  <span data-feather="calendar"></span>
                  This week
                </button>
              </div>
            </div>
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export { LayoutDashBoard };
