import { Header } from '@/components/Header';
import Head from 'next/head';
import React from 'react';

// import { Container } from './styles';
type LayoutProps = {
  title?: string;
  keywords?: string;
  description?: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({
  title,
  keywords,
  description,
  children
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      {children}
    </>
  );
};

Layout.defaultProps = {
  title: 'DJ Events | Find the hostter parties',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music, dj, edm, events'
};

export default Layout;
