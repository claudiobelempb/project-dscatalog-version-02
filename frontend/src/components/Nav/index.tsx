import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './styles.module.scss';

const Nav: React.FC = () => {
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
            <Link className=" active nav-link" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Catálogo
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/auth/login">
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export { Nav };
