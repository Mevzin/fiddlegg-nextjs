import styled from "styled-components";

interface ContainerProps {
  backgroundImage: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${({ backgroundImage }) => backgroundImage});
`;

export const Content = styled.div`
  width: 1100px;
  height: 700px;
  background-color: rgba(0,0,0,0.8);
  margin: auto 0;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 150px;
  }

  h1 {
    font-size: 90px;
    margin-left: 30px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  height: 60px;
  width: 700px;
  justify-content: space-between;
  border-radius: 100px;
  background-color: #4E4D4D;

  input {
      padding: 10px;
      border: none;
      border-radius: 4px;
      text-align: center;
      width: 60%;
      background-color: #4E4D4D;
      color: #b0aeae;
      transition: 0.3s;
      box-shadow: 0px 1px #000000;
      &:focus{
        color: #FFFFFF;
      }
    }
    select {
      color: #fff;
      text-align: center;
      align-items: center;
      background-color: #4E4D4D;
      padding: 10px;
      width: 18%;
      margin: 0;
      border: none;
    }
    button {
      color: #fff;
      background-color: #4E4D4D;
      padding: 10px;
      border-radius: 4px;
      cursor: pointer;
      width: 20%;
    }
`;

export const ButtonLink = styled.button`
  &:hover{
        color: #4E4D4D;
        background-color: #fff;
      }
`;

export const GamesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 50px;
`;