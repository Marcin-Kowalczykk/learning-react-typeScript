// without context Api

import React, { useState } from 'react';

import ToDoNote from './models/ToDoNote';

import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';

import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
`;

function App() {
  const item1 = new ToDoNote('tescik1');
  const item2 = new ToDoNote('tescik2');

  const initialToDoArray = [item1, item2];

  const [toDoArray, setToDoArray] = useState<ToDoNote[]>(initialToDoArray);

  const onAddToDoHandler = (dataFromForm: string) => {
    const newToDo = new ToDoNote(dataFromForm);
    setToDoArray((previous) => {
      return [...previous, newToDo];
    });
  };

  const removeItemHandler = (toDoId: string) => {
    setToDoArray((prev) => {
      return prev.filter((elem) => elem.id !== toDoId);
    });
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <NewToDo onAddToDo={onAddToDoHandler} />
        <ToDoList list={toDoArray} removeItem={removeItemHandler} />
      </Wrapper>
    </>
  );
}

export default App;
