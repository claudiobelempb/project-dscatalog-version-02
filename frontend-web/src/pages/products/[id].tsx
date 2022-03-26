import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '@/components/Layout';

import { FaChevronLeft } from 'react-icons/fa';
import { TypeProductPage } from 'types/TypeProductPage';
import { ProductPrice } from '@/components/ProductPrice';
import { formatPrice } from 'util/formatters';
import { API_CDN_URL } from '@/config/index';

// import { Container } from './styles';
type ProductDetailProps = {
  product: TypeProductPage;
};

const ProductPage: React.FC<ProductDetailProps> = ({ product }) => {
  const router = useRouter();
  console.log(router.query);

  return (
    <Layout title='Adicionar Produto'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='bg-white mt-4 card shadow'>
              <div className='row px-3'>
                {/* <h1>Product ID: {router.query.id}</h1> */}
                <button
                  className='btn btn-link text-decoration-none text-dark fw-bold fs-3 text-uppercase d-flex align-items-center'
                  onClick={() => router.push('/products')}
                >
                  <span>
                    <FaChevronLeft className='text-primary pe-2' />
                  </span>{' '}
                  Voltar
                </button>
              </div>

              <div className='row row-cols-sm row-cols-md row-cols-lg-2 g-2'>
                <div className='d-flex flex-column p-3'>
                  <Image
                    className='card rounded-3 border border-1'
                    src={product.imgUrl}
                    alt={product.name}
                    width={350}
                    height={350}
                    layout={'responsive'}
                  />
                  <h3 className='py-3'>{product.name}</h3>
                  <ProductPrice price={formatPrice(product.price)} />
                </div>
                <div className='d-flex flex-column p-3'>
                  <div className='card rounded-3 border border-1 p-3'>
                    <h4 className='text-secondary'>Descrição do Produto</h4>
                    <p className='lead text-secondary'>{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

ProductPage.defaultProps = {
  product: {
    id: 1,
    name: 'The Lord of the Rings',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 1190.5,
    imgUrl: `${API_CDN_URL}/devsuperior/dscatalog-resources/master/backend/img/7-big.jpg`,
    status: 'ENABLED',
    createdAt: '2022-01-31T12:36:13.501610Z',
    updatedAt: null,
    categories: [
      {
        id: 1,
        name: 'Livros'
      },
      {
        id: 3,
        name: 'Computadores'
      }
    ]
  }
};

export default ProductPage;
