import React, { ReactNode } from 'react';
import { FaChevronRight } from 'react-icons/fa';

type TypeButtonIconProps = {
  children?: ReactNode;
  title: string;
  size: 'auto' | 25 | 50 | 75 | 100;
  onClcik?: () => void;
};

const ButtonDefault: React.FC<TypeButtonIconProps> = ({
  children,
  title,
  size = 'auto',
  onClcik,
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center w-100">
      <button
        onClick={onClcik}
        className={`btn btn-primary w-${size} text-uppercase position-relative text-white`}
      >
        {title}{' '}
        <FaChevronRight
          // style={{ width: '2.3rem', height: '2.3rem' }}
          className="position-absolute top-0 end-0 bg-blue rounded-end h-100 w-auto text-white"
        />
      </button>
    </div>
  );
};

export { ButtonDefault };
