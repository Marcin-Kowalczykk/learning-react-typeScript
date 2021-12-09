import React, { useRef } from 'react';

import { Wrapper, Label, Input, Button } from '.';

const NewToDo: React.FC<{ onAddToDo: (data: string) => void }> = ({ onAddToDo }) => {
  const inputToDoRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const inputToDoValue = inputToDoRef.current!.value;

    if (inputToDoValue.trim().length === 0) {
      return;
    }

    onAddToDo(inputToDoValue);
  };

  return (
    <Wrapper onSubmit={formSubmitHandler}>
      <Label htmlFor="toDoText">To do text</Label>
      <Input type="text" id="toDoText" ref={inputToDoRef} />
      <Button type="submit">add to do</Button>
    </Wrapper>
  );
};

export default NewToDo;
