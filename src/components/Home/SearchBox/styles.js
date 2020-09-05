import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 8.2em;
  background-color: #f2f2f2;
  margin: 3em 5em;
  padding-left: 3em;
  border-radius: 10px;
`;

export const Icon = styled.img`
  position: absolute;
  width: 3em;
  padding-top: 5px;
  height: auto;
  opacity: 50%;
`;

export const Input = styled.input`
  margin-left: 1.5em;
  width: 90%;
  border: none;
  background: none;
  height: 100%;
  font-size: 2.5em;
`;
