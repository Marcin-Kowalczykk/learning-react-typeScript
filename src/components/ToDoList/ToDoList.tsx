import React from 'react';

import ToDoNote from '../../models/ToDoNote';

import ToDoElement from '../ToDoElement';

import { Wrapper } from '.';

const ToDoList: React.FC<{
  list: ToDoNote[];
  removeItem: (toDoId: string) => void;
}> = ({ list, removeItem }) => {
  return (
    <Wrapper>
      <ul>
        {list.map((element) => (
          <ToDoElement
            key={element.id}
            text={element.text}
            removeItem={removeItem.bind(null, element.id)}
          />
        ))}
      </ul>
    </Wrapper>
  );
};

export default ToDoList;
