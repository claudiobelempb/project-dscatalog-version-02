import Image from 'next/image';
import type { NextPage } from 'next';

import BannerHome from '@/images/banner-home.svg';
import { ButtonIcon } from '@/components/ButtonIcon';
import Layout from 'components/Layout';

const Home: NextPage = () => {
  return (
    <Layout title='DScatagolog | Home'>
      <div className='container mt-4 px-4'>
        <div className='row flex-md-row-reverse rounded-3 border-0 shadow col bg-white py-5 g-2'>
          <div className='col-sm-12 col-md'>
            <Image className='img-fluid' src={BannerHome} alt={''} />
          </div>
          <div className='col-sm-12 col-md d-flex flex-column justify-content-center align-items-center '>
            <h3 className='display-6 fw-bold text-center text-md-start px-4 mt-5'>
              Conheça o melhor catálogo de produtos
            </h3>
            <p className='lead text-secondary text-center text-md-start px-4 mt-3'>
              Ajudaremos você a encontrar os melhores produtos disponíveis no
              mercado.
            </p>

            <ButtonIcon title='INICIE AGORA A SUA BUSCA' />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
