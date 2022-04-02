import React from 'react';
import { Link } from 'react-router-dom';

type BrandProsp = {
  href: string;
};

const Brand: React.FC<BrandProsp> = ({ href }) => {
  return (
    <Link to={href} className="navbar-brand fw-bold bg-primary">
      DS Catalog
    </Link>
  );
};
export { Brand };
