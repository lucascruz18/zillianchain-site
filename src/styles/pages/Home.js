import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
  width: 100%;
`;
export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 90%;
  margin-top: 50px;
`;

export const MainWrapper = styled.main`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  /* margin-top: 150px; */
`;

export const FeaturedWrapper = styled.main`
  display: flex;
  align-items: right;
  justify-content: center;
  width: 50%;
  /* margin-top: 150px; */
`;

export const FeaturedImage = styled.img`
  width: 500px;
  height: 400px;
  background: #333;
  border-radius: 8px;
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
`;

export const SubTitle = styled.p`
  color: #8f9ba8;
  font-size: 28px;
  text-align: left;

  margin-top: 15px;
`;

export const ExploreButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius:8px;
  margin-top: 60px;
  background: rgb(32, 129, 226);
  font-family: Arial, Helvetica, sans-serif;
  border: 0;
  font-size: 18px;
  font-weight: bold;
  transition: 0.5s;
  color: #fafafa;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    opacity: 0.80;
  }
`;

export const SpecialNFTTitle = styled.h3`
  color: #8f9ba8;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 50px;
`;

export const SpecialNFTWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 50px;
  height: 500px;
  margin-bottom: 50px;
`;

export const SpecialNFTItem = styled.div`
  width: 300px;
  height: 500px;
  /* background: #333; */
  margin: 20px;
  border-radius: 8px;
  border: 1px solid #333;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    margin-top: 8px;
  }
`;
