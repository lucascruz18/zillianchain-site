import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 150px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
`;

export const Logo = styled.image`
  font-weight: bold;
  color: #fafafa;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    opacity: 0.50;
  }
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavItemsText = styled.a`
  color: #8f9ba8;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s;
  margin: 20px;

  &:hover  {
    color: #333;
  }
`;

export const LoginButton = styled.button`
  width: 200px;
  height: 50px;
  background: -webkit-linear-gradient(left, #FC466B, #3F5EFB);
  background-size: 200% 200%;
  animation: gradient-animation 4s ease infinite;
  border-radius: 28px;
  border: 0;
  margin-right: 50px;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    opacity: 0.90;
  }
`;

export const LoginButtonText = styled.p`
  font-weight: bold;
  color: #fafafa;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
`;
