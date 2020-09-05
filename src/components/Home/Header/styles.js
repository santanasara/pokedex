import styled from 'styled-components';
import pokeball from '../../../assets/patterns/pokeball.svg';

export const Container = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  height: 15vh;
  width: 100%;
  justify-content: flex-end;
`;
export const HeaderBackground = styled.div`
  position: absolute;
  margin: 0 auto;
  justify-content: flex-end;
  height: 15vh;
  width: 100%;
  box-shadow: 0px -40px 50px 10px white inset;
  background-image: url(${pokeball});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 70% 70%;
  opacity: 5%;
`;

export const HeaderMenu = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-right: 4em;
  margin-top: 4em;
`;

export const HeaderIcon = styled.img`
  width: 4em;
  height: auto;
`;

export const HeaderText = styled.div`
  margin: 0 5em;
`;
export const Title = styled.h1`
  font-size: 5em;
  margin: 0;
`;

export const SubTitle = styled.p`
  font-size: 2.5em;
  color: #5c5c5c;
  margin: 0.5em 0;
`;
