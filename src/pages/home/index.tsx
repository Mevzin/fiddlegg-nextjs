import React, { useState } from "react";
import {
  Container,
  Content,
  LogoWrapper,
  InputContainer,
  ButtonLink,
  GamesContainer,
} from "./styles";

/* eslint-disable @next/next/no-img-element */

import LogoSvg from "../../assets/corvo.png";
import LolBack from "../../assets/leagueBackground.jpg";

import GamesOptions from "../../../games.json";
import CardButton from "components/CardButton";

const Home = () => {
  const [summoner, setSummoner] = useState("");
  const [locale, setLocale] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);

  const options = [
    {
      label: "Região",
      value: "null",
    },
    {
      label: "BR",
      value: "br1",
    },
    {
      label: "NA",
      value: "na1",
    },
    {
      label: "EUN",
      value: "eun1",
    },
    {
      label: "EUW",
      value: "euw1",
    },
    {
      label: "JP",
      value: "jp1",
    },
    {
      label: "KR",
      value: "kr",
    },
    {
      label: "LA 1",
      value: "la1",
    },
    {
      label: "LA 2",
      value: "la2",
    },
    {
      label: "OC",
      value: "oc1",
    },
    {
      label: "TR",
      value: "tr1",
    },
    {
      label: "RU",
      value: "ru",
    },
  ];

  console.log(GamesOptions);

  // document.addEventListener("keydown", function (e) {
  //   if (e.key === "Enter") {
  //     document.getElementById("searchSummoner")?.click();
  //   }
  // });

  if (summoner !== "" && locale !== "") {
    setDisabledButton(false);
  }

  return (
    <Container backgroundImage={LolBack.src}>
      <Content>
        <LogoWrapper>
          <img src={LogoSvg.src} />
          <h1>Fiddle.gg</h1>
        </LogoWrapper>
        <InputContainer>
          <input
            placeholder="Nome de invocador"
            value={summoner}
            onChange={(e) => setSummoner(e.target.value)}
          ></input>
          <select
            placeholder="Selecione uma região"
            onChange={(e) => setLocale(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ButtonLink disabled={disabledButton}>Buscar</ButtonLink>
        </InputContainer>
        <GamesContainer>
          {GamesOptions.map((game) => (
            <CardButton imageUrl={game.imageUrl} title={game.name} key={game.tag}/>
          ))}
        </GamesContainer>
      </Content>
    </Container>
  );
};

export default Home;
