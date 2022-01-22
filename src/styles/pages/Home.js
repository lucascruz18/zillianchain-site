import styled from "styled-components"

export const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #000;
  width: 100%;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 60%;
`;

export const Title = styled.h1`
  font-size: 50px;
  background-image: linear-gradient(135deg, #00B4DB 0px, #0083B0 100%);
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
  color: #f2f2f2;
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