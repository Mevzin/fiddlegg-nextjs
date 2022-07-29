/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container } from "./styles";

interface Props {
  title: string;
  imageUrl: string;
}

const CardButton = ({ title, imageUrl }: Props) => {

  console.log(imageUrl)
  return (
    <Container>
      <img src={imageUrl}/>
      <h1>{title}</h1>
    </Container>
  );
};

export default CardButton;
