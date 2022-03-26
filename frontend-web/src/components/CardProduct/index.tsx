import Image from 'next/image';
import Link from 'next/link';

import CardImageDefault from '@/images/product-default.svg';
import { ProductPrice } from '@/components/ProductPrice';
import { TypeProductPage } from 'types/TypeProductPage';
import { formatPrice } from 'util/formatters';

type ProductProps = {
  product: TypeProductPage;
};

const CardProduct: React.FC<ProductProps> = ({ product }) => {
  return (
    <Link href={`products/${product.id}`}>
      <a className='col-sm col-sm-6 col-md-4 col-lg-3 g-3'>
        <div className='card shadow rounded-3'>
          <Image
            layout='responsive'
            width={250}
            height={250}
            src={product.imgUrl}
            className='card-img-top p-2'
            alt={product.name}
          />
          <div className='card-body border-top p-2'>
            <h5 className='fs-5 card-title text-dark fw-bold mt-2'>
              {product.name}
            </h5>
            <ProductPrice price={formatPrice(product.price)} />
          </div>
        </div>
      </a>
    </Link>
  );
};

CardProduct.defaultProps = {
  product: {
    id: 1,
    name: 'The Lord of the Rings',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 1190.5,
    imgUrl: CardImageDefault,
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

export { CardProduct };
