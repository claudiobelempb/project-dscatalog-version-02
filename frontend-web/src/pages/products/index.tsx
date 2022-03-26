import { CardProduct } from '@/components/CardProduct';
import Layout from 'components/Layout';

import ProductImageDefault from '@/images/product-default.svg';
import { TypeProductPage } from 'types/TypeProductPage';
import { API_CDN_URL } from '@/config/index';

const ProductsPage: React.FC = () => {
  const product: TypeProductPage = {
    id: 1,
    name: 'The Lord of the Rings',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 1190.5,
    imgUrl: `${API_CDN_URL}/devsuperior/dscatalog-resources/master/backend/img/7-big.jpg`,
    // imgUrl: ProductImageDefault,
    status: 'ENABLED',
    createdAt: '2022-01-31T12:36:13.501610Z',
    updatedAt: null,
    categories: []
  };

  return (
    <Layout title='Catálogo de Produtos'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <form
              className='card bg-white mt-4 mb-4 p-2 border-0 shadow rounded-3'
              action=''
            >
              <input
                className='form-control form-control-lg border-0 rounded-0 border-bottom'
                type='text'
                placeholder='Nome do produto'
                aria-label='Nome do produto'
              />
            </form>
          </div>
        </div>
        <div className='row'>
          <CardProduct product={product} />
          <CardProduct product={product} />
          <CardProduct product={product} />
          <CardProduct product={product} />
          <CardProduct product={product} />
          <CardProduct product={product} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
