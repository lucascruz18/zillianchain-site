import styled from "styled-components"

export const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background: #000;
  width: 100%;
`

export const Main = styled.main`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  margin-top: 150px;
`;

export const Title = styled.h1`
  font-size: 50px;
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
`

export const SubTitle = styled.p`
  color: #333;
  font-size: 18px;
  text-align: left;

  margin-top: 12px;
`;

export const Description = styled.p`
  color: #8f9ba8;
  font-size: 16px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;

  margin-top: 15px;
`;