import styled from "styled-components";

interface ContainerProps {
  backgroundImage: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${({ backgroundImage }) => backgroundImage});
`;

const Content = styled.div`
  width: 1100px;
  height: 700px;
  background-color: rgba(0, 0, 0, 0.8);
  margin: auto 0;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const LogoWrapper = styled.div`
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

const InputContainer = styled.div`
  display: flex;
  height: 60px;
  width: 700px;
  justify-content: space-between;
  border-radius: 100px;
  background-color: #4e4d4d;

  input {
    padding: 10px;
    border: none;
    border-radius: 4px;
    text-align: center;
    width: 60%;
    background-color: #4e4d4d;
    color: #b0aeae;
    transition: 0.3s;
    box-shadow: 0px 1px #000000;
    &:focus {
      color: #ffffff;
    }
  }
  select {
    color: #fff;
    text-align: center;
    align-items: center;
    background-color: #4e4d4d;
    padding: 10px;
    width: 18%;
    margin: 0;
    border: none;
  }
  button {
    color: #fff;
    background-color: #4e4d4d;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    width: 20%;
  }
`;

const ButtonLink = styled.button`
  &:hover {
    color: #4e4d4d;
    background-color: #fff;
  }
`;

const GamesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 50px;
`;

export {
  GamesContainer,
  ButtonLink,
  InputContainer,
  LogoWrapper,
  Content,
  Container,
};
