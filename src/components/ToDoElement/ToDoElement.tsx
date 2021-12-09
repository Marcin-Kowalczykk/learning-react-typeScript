import React from 'react';

import { Wrapper } from '.';

const ToDoElement: React.FC<{
  text: string;
  removeItem: (event: React.MouseEvent) => void;
}> = ({ text, removeItem }) => {
  return (
    <Wrapper onClick={removeItem}>
      <p>{text}</p>
    </Wrapper>
  );
};

export default ToDoElement;
