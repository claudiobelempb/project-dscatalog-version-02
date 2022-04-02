import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { ButtonDefault } from 'components/ButtonDefault';
import { LayoutHome } from 'components/Layout/LayoutHome';

import ImgLogin from '../../assets/images/login.svg';
import { UserAuth } from 'hooks/users/UserAuth';
import { toast } from 'react-toastify';
import { getLocalStorage } from 'app/utils/functions/getLocalStorage';

type FromDataUserProps = {
  username: string;
  password: string;
};

const Auth: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromDataUserProps>();
  // const [redirect, setRedirect] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  // const history = useHistory();

  const handleOnSubmit = (user: FromDataUserProps) => {
    UserAuth(user)
      .then(response => {
        setHasError(false);
        const token = getLocalStorage(
          '@AuthUserLocalDsCatalogStorage',
        ).access_token;
        console.log('Token: ', token);
        console.log('Success: ', response);
        toast.success(`Sejá bem vindo (a) ${user.username}`);
        // history.push('/admin');
      })
      .catch(error => {
        setHasError(true);
        console.log('Error: ', error);
        toast.error('Usuário ou senha inválido');
        // history.push('/admin/auth/login');
      });
  };

  return (
    <LayoutHome>
      <div className="row p-3">
        <div className="col-md-6 col-lg-7 g-5 ">
          <div className="col ">
            <h2 className=" fw-bold mt-5">
              Divulgue seus produtos no DS Catalog
            </h2>
            <h3 className="lead text-secondary">
              Faça parte do nosso catálogo de divulgação e aumente a venda dos
              seus produtos.
            </h3>
            <img className="img-fluid" src={ImgLogin} alt="..." />
          </div>
        </div>
        <div className="col-md-6 col-lg-5 bg-white p-2 mt-5 rounded-3 d-flex justify-content-center align-items-center shadow-lg">
          <form
            className="p-4 w-100 needs-validation"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <h3 className="text-center text-uppercase mb-5">Login</h3>
            <div className="col">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                {...register('username', {
                  required: 'Campo obrigatório',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido',
                  },
                })}
                type="text"
                className={`form-control ${
                  errors.username ? 'is-invalid' : ''
                } `}
                id="email"
                placeholder="Email"
                name="username"
              />
              <div className="invalid-feedback d-block">
                {errors.username?.message}
              </div>
            </div>
            <div className="col">
              <label htmlFor="password" className="form-label">
                Senha
              </label>
              <input
                {...register('password', {
                  required: 'Campo obrigatório',
                })}
                type="password"
                className={`form-control ${
                  errors.password ? 'is-invalid' : ''
                }`}
                id="password"
                placeholder="Senha"
                name="password"
              />
              <div className="invalid-feedback d-block">
                {errors.password?.message}
              </div>
            </div>
            <Link className="mb-5" to={'/admin/auth/recover'}>
              Esqueci a senha?
            </Link>
            <ButtonDefault size={100} title="Fazer Login" />
            <div className="d-flex justify-content-center mt-4 mb-5">
              Não tem Cadastro?
              <Link className="text-uppercase ms-1" to={'/admin/auth/signup'}>
                Cadastrar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </LayoutHome>
  );
};

export default Auth;
