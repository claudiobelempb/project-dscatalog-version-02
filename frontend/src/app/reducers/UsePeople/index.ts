import { PeopleType } from 'app/types/PeopleType';
import { useReducer } from 'react';
import { PeopleReducer } from './PeopleReducer';

const initialState: PeopleType[] = [];

const UsePeople = () => {
  return useReducer(PeopleReducer, initialState);
};

export { UsePeople };
