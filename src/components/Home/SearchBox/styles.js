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
  @media (min-width: 1050px) {
    height: 4em;
    padding-left: 1em;
    margin: 0.5em 2.5em;
  }
`;

export const Icon = styled.img`
  position: absolute;
  width: 3em;
  padding-top: 5px;
  height: auto;
  opacity: 50%;
  @media (min-width: 1050px) {
    width: 2em;
    padding-top: 2px;
  }
`;

export const Input = styled.input`
  margin-left: 1.5em;
  width: 90%;
  border: none;
  background: none;
  height: 100%;
  font-size: 2.5em;
  @media (min-width: 1050px) {
    font-size: 1em;
    margin-left: 2.5em;
  }
`;
