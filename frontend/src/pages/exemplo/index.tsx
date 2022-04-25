import React from 'react';
import { useDispatch } from 'react-redux';
import { setName, setAge } from 'redux/reducers/UserReducer';
import { useAppSelector } from 'hooks/useAppSelectors';

import { LayoutHome } from 'components/Layout/LayoutHome';
import { setThemeStatus } from 'redux/reducers/ThemeReducer';

const Exemplo: React.FC = () => {
  const dispatch = useDispatch();
  const { name, age } = useAppSelector(state => state.user);
  const { status } = useAppSelector(state => state.theme);

  const onChangeSetName = (name: string) => {
    dispatch(setName(name));
  };

  const toggleTheme = (theme: string) => dispatch(setThemeStatus(theme));

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeSetName(e.target.value);
  };

  const handleSetAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(parseInt(e.target.value)));
  };

  const handleSetStatusTheme = () => {
    toggleTheme(status === 'light' ? 'dark' : 'light');
  };

  return (
    <LayoutHome>
      <div className="mt-4">
        Meu nome é: {name} e tenho {age} anos.
      </div>
      <hr />
      <input
        onChange={handleSetName}
        className="form-control"
        type="text"
        value={name}
      />
      <input
        onChange={handleSetAge}
        className="form-control mt-3"
        type="number"
        value={age}
      />
      <hr />
      <button
        onClick={handleSetStatusTheme}
        className="btn btn-primary text-white"
      >
        Switch Theme {status}
      </button>
    </LayoutHome>
  );
};

export default Exemplo;
