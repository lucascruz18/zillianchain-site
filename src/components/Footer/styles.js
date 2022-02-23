import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  color: rgb(32, 129, 226);
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 15px;
  cursor: pointer;
  transition: 0.5s;

  &:hover  {
    background: -webkit-linear-gradient(left, #FC466B, #3F5EFB);
    animation: gradient-animation 4s ease infinite;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SocialButton = styled.a`
  margin: 5px;
  text-decoration: none;
`;
