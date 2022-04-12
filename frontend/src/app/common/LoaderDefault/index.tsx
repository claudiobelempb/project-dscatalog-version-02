import React from 'react';
type LoaderProps = {
  show?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
};

const LoaderDefault: React.FC<LoaderProps> = ({ show = false, size = 4 }) => {
  if (!show) {
    return <></>;
  }
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="spinner-border text-primary"
        style={{ width: `${size}rem`, height: `${size}rem` }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export { LoaderDefault };
