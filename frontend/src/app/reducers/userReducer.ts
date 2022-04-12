import { ReducerActioinType } from 'app/types/ReducerAtcionType';

export type UserType = {
  name: string;
  age: number;
};

export const userInitialState: UserType = {
  name: 'Bonieky',
  age: 90,
};

export const userReducer = (
  state: UserType,
  action: ReducerActioinType,
  // action: reducerActioinType<UserType>,
) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.payload.name };
    case 'CHANGE_AGE':
      return { ...state, age: action.payload.age };
  }

  return state;
};
