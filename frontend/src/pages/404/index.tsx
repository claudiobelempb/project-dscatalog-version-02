import React from 'react';
import { LayoutHome } from 'components/Layout/LayoutHome';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <LayoutHome>
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h1>
              <FaExclamationTriangle /> 404
            </h1>
            <h4>Sorry, there is nothing here</h4>
            <Link to={'/'}>Go Back Home</Link>
          </div>
        </div>
      </div>
    </LayoutHome>
  );
};

export default NotFoundPage;
