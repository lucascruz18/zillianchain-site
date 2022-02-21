import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background: #000;
  width: 100%;
`;

export const Main = styled.main`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  margin-top: 60px;
`;

export const Title = styled.h1`
  font-size: 45px;
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
`;

export const LabelInput = styled.label`
  color: #8f9ba8;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 30px;
  margin-bottom: 10px;

  &:hover  {
    opacity: 0.80;
  }
`;

export const Input = styled.input`
  width: 400px;
  height: 50px;
  border: 0;
  border-radius: 8px;
  background: #333;
  color: rgba(255, 255, 255, 0.7);
  padding: 0 15px;
`;

export const TextArea = styled.textarea`
  width: 400px;
  height: 100px;
  border: none;
  border-radius: 8px;
  background: #333;
  color: rgba(255, 255, 255, 0.7);
  max-width: 400px;
  padding: 10px;
`;

export const Description = styled.p`
  color: #8f9ba8;
  font-size: 16px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;

  margin-top: 15px;
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 45px;
  background: -webkit-linear-gradient(left, #FC466B, #3F5EFB);
  background-size: 200% 200%;
  animation: gradient-animation 4s ease infinite;
  border: 0;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 8px;
  margin-top: 60px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fafafa;
  font-weight: bold;
  margin-bottom: 50px;

  :hover {
    opacity: 0.80;
  }
`;
