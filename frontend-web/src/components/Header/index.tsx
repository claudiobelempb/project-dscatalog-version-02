import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className='bg-primary py-3'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container'>
          <Link href='/'>
            <a className='navbar-brand fw-bold'>DS Catalog</a>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link href={'/'}>
                  <a className='nav-link active fw-bold' aria-current='page'>
                    Home
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href={'/products'}>
                  <a className='nav-link'>Catálago</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
