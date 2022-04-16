import { UsePeople } from 'app/reducers/UsePeople';
import { PeopleType } from 'app/types/PeopleType';
import { LayoutHome } from 'components/Layout/LayoutHome';
import React, { useState } from 'react';

const PeoplePage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [state, dispatch] = UsePeople();

  const handleCreatePeople = () => {
    dispatch({
      type: 'UsePeople/ADD',
      payload: {
        name,
      },
    });
    setName('');
  };

  const handleDeletePeople = (id: string) => {
    dispatch({
      type: 'UsePeople/DEL',
      payload: {
        id,
      },
    });
  };

  const handleOrderPeopleName = () => {
    dispatch({
      type: 'UsePeople/ORDER',
    });
  };

  return (
    <LayoutHome>
      <h1>People</h1>
      <input
        className="form-control"
        onChange={e => setName(e.target.value)}
        value={name}
        type="text"
      />
      <button
        className="btn btn-primary text-white mt-3 mb-3"
        onClick={handleCreatePeople}
        type="button"
      >
        Create
      </button>
      <button
        className="btn btn-primary text-white mt-3 mb-3 ms-3"
        onClick={handleOrderPeopleName}
        type="button"
      >
        Order Name
      </button>

      {state.map(people => (
        <div key={people.id}>
          <span>{people.id}</span>
          <h2>{people.name}</h2>
          <button
            className="btn btn-danger text-white"
            onClick={() => handleDeletePeople(people.id)}
            type="button"
          >
            Delete
          </button>
        </div>
      ))}
    </LayoutHome>
  );
};

export default PeoplePage;
