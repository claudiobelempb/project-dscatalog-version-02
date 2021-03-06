import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ImgBackgroundHome } from 'assets/images/background-home.svg';
import { ButtonDefault } from 'components/ButtonDefault';

import { LayoutHome } from '../..//components/Layout/LayoutHome';

import styles from './styles.module.scss';
import { AppContetx } from 'app/contexts/AppContetx';
import { HasAnyRoles } from 'app/utils/functions/HasAnyRoles';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleOnClickProducts = () => {
    navigate('/products');
  };

  const { state, dispatch } = useContext(AppContetx);

  const handleChangeName = () => {
    dispatch({
      type: 'SET_AUTH',
      payload: {
        authenticated: true,
      },
    });
  };

  return (
    <>
      <LayoutHome>
        <h2>
          {HasAnyRoles([
            'ROLE_INSTRUCTOR',
            'ROLE_ADMIN',
            'ROLE_INSTRUCTOR',
            'ROLE_STUDENT',
            'ROLE_OPERATOR',
          ])
            ? 'true'
            : 'false'}
        </h2>
        <button onClick={handleChangeName}>Trocar name</button>
        <div className={`row d-flex flex-row-reverse ${styles.home_container}`}>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <ImgBackgroundHome />
          </div>
          <div
            className="
            col-sm-12
            col-md-12
            col-lg-6
            d-flex
            flex-column
            justify-content-center
            align-items-start
            "
          >
            <h1>Conheça o melhor catálogo de produtos</h1>
            <p>
              Ajudaremos você a encontrar os melhores produtos disponíveis no
              mercado.
            </p>
            <ButtonDefault
              onClcik={handleOnClickProducts}
              size={100}
              title="INICIE AGORA A SUA BUSCA"
            />
          </div>
        </div>
      </LayoutHome>
    </>
  );
};

export default Home;
