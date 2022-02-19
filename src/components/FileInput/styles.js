import styled from 'styled-components';

export const Container = styled.div`
  align-self: stretch;
  margin-bottom: 30px;
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 400px;
    height: 200px;
    /* background: rgba(0, 0, 0, 0.); */
    /* background: #333; */
    border: 3px dashed rgb(255, 255, 255, 0.5);
    border-radius: 8px;
    padding: 0 10px;
    margin-top: 50px;

    &:hover {
      opacity: 0.7;
    }
    .icon {
      flex-direction: column;
      align-items: center;
      p {
        font-size: 15px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    img {
      width: 100%;
      max-height: 280px;
    }
    input {
      display: none;
    }
  }
`;