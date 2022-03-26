type ProductPriceProps = {
  price: string | number;
};

const ProductPrice: React.FC<ProductPriceProps> = ({ price }) => {
  return (
    <div className='d-flex'>
      <span className='fs-6 text-top me-2 text-secondary lead'>R$</span>
      <strong className='fs-2 text-primary'>
        {price}
        {/* 2.779,<span className='fs-6 text-bottom'>00</span> */}
      </strong>
    </div>
  );
};

export { ProductPrice };
