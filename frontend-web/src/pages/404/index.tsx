import { FaExclamationTriangle } from 'react-icons/fa';
import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';

// import { Container } from './styles';

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col d-flex flex-column justify-content-center align-items-center'>
            <h1>
              <FaExclamationTriangle /> 404
            </h1>
            <h4>Sorry, there is nothing here</h4>
            <Link href={'/'}>Go Back Home</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
