import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  /* background-color: #fff;
  background-color: rgba(255,255,255,0.1); */
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Logo = styled.image`
  font-weight: bold;
  color: #fafafa;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const NavItemsText = styled.a`
  color: #8f9ba8;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s;
  margin: 15px;

  &:hover  {
    color: #333;
  }
`;

export const LoginButton = styled.button`
  width: 115px;
  height: 50px;
  background: #1473E6;
  border-radius: 28px;
  border: 0;
  margin-left: 80px;
  cursor: pointer;
`;

export const LoginButtonText = styled.p`
  font-weight: bold;
  color: #fafafa;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
`;