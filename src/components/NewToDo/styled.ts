import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 21.5em;
  padding: 0em;
  margin: 0em;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  font-size: 20px;
  margin: 0.5em 0 0.5em 0;
  border: none;
  background: #cbe7f18c;
  padding: 0.5em;
  width: 100%;
  border-bottom: 2px solid #1b32657a;
`;

export const Button = styled.button`
  font-size: 15px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 2em;
  padding: 1em;
  background: #3734dfbd;
  color: white;
  transition: background 1s linear;

  &:hover {
    background: #0634db99;
  }
`;
