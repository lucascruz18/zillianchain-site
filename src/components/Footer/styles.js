import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  margin-bottom: 10px;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 100px;
`;

export const SocialText = styled.p`
  color: #8f9ba8;
  font-size: 12px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 15px;
  cursor: pointer;
  transition: 0.5s;

  &:hover  {
    color: #333;
  }
`;

export const SocialButton = styled.a`
  margin: 5px;
  text-decoration: none;
`;