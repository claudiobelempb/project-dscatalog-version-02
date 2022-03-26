import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

import styles from './styles.module.scss';

type ButtonIconProps = {
  title: string;
};

const ButtonIcon: React.FC<ButtonIconProps> = ({ title }) => {
  return (
    <div className={`${styles.button__icon} text-center text-md-start`}>
      <Link href={'/products'}>
        <a className='btn btn-primary fw-bold'>
          {title}
          <span className='rounded-end'>
            <FaChevronRight className='text-light bg-primary p-2 ' />
          </span>
        </a>
      </Link>
    </div>
  );
};

export { ButtonIcon };
