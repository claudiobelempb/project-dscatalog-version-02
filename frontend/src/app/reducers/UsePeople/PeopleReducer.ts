import { PeopleType } from 'app/types/PeopleType';
import { v4 as uuid } from 'uuid';
import * as ActionsType from './ActionsType';

type ActionType = {
  type: string;
  payload?: {
    id?: string;
    name?: string;
  };
};

const PeopleReducer = (state: PeopleType[], action: ActionType) => {
  switch (action.type) {
    case ActionsType.ADD:
      if (action.payload?.name) {
        const UsePeople = [...state];
        UsePeople.push({
          id: uuid(),
          name: action.payload.name,
        });
        return UsePeople;
      }
      break;
    case ActionsType.DEL:
      if (action.payload?.id) {
        let UsePeople = [...state];
        UsePeople = UsePeople.filter(s => s.id !== action.payload?.id);
        return UsePeople;
      }
      break;
    case ActionsType.ORDER:
      let UsePeople = [...state];
      UsePeople = UsePeople.sort((a, b) => (a.name > b.name ? 1 : -1));
      return UsePeople;
  }
  return state;
};

export { PeopleReducer };
