import React, { useState } from "react";
import {
  Container,
  MobileContainer,
  IconContainer,
  Icon,
  ImageContainer,
  Img,
  ImageDesWrp,
  ParametrsCon,
  ParamType,
  PTypeText,
  DarkMode,
  Title,
} from "./NightModeStyle";

function NightMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const whiteMode = {
    backround: "white",
    color: "#000",
  };
  const darkMode = {
    backround: "black",
    color: "#fff",
  };
  const [style, setStyle] = useState(whiteMode);
  const Toggle = () => {
    setIsDarkMode(!isDarkMode);
    setStyle(isDarkMode ? whiteMode : darkMode);
  };
  return (
    <Container>
      <MobileContainer color={style.backround}>
        <IconContainer>
          <Icon.Arrow color={style.color} />
          <Icon.Edit color={style.color} />
        </IconContainer>
        <ImageContainer>
          <Img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723075200&semt=ais_hybrid" />
          <ImageDesWrp>
            <Title color={style.color}>Picture</Title>
            <Title color={style.color}>No one</Title>
          </ImageDesWrp>
        </ImageContainer>
        <ParametrsCon>
          <ParamType>
            <Icon.Moon />
            <PTypeText color={style.color}>Dark Mode</PTypeText>
            <DarkMode onChange={Toggle} checked={isDarkMode} size={25} />
          </ParamType>
          <ParamType>
            <Icon.Grid />
            <PTypeText color={style.color}>Story</PTypeText>
          </ParamType>
          <ParamType>
            <Icon.User />
            <PTypeText color={style.color}>Chat heads</PTypeText>
          </ParamType>
          <ParamType>
            <Icon.UserPlus />
            <PTypeText color={style.color}>Groups</PTypeText>
          </ParamType>
          <hr />
        </ParametrsCon>
      </MobileContainer>
    </Container>
  );
}

export default NightMode;
