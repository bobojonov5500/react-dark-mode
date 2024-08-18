import styled from "styled-components";
import { LeftArrowAlt } from "@styled-icons/boxicons-regular/LeftArrowAlt";
import { EditAlt } from "@styled-icons/boxicons-solid/EditAlt";
import { Moon } from "@styled-icons/boxicons-regular/Moon";
import { UserCheck } from "@styled-icons/fa-solid/UserCheck";
import { UserPlus } from "@styled-icons/fa-solid/UserPlus";
import { Grid1x2 } from "@styled-icons/bootstrap/Grid1x2";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const DarkMode = styled(DarkModeSwitch)`
  margin-left: auto;
`;
const Container = styled.div``;
const MobileContainer = styled.div`
  -webkit-box-shadow: 0px 0px 54px -13px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 54px -13px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 54px -13px rgba(0, 0, 0, 1);
  width: 300px;
  border-radius: 15px;
  height: 100%;
  margin: 0 auto;
  padding: 15px 15px;
  background: ${({ color }) => color};
  transition: all 0.3s ease-out;
`;
const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled.div``;
Icon.Arrow = styled(LeftArrowAlt)`
  width: 25px;
  color: ${({ color }) => color};
`;
const Title = styled.span`
  color: ${({ color }) => color};
`;
Icon.Edit = styled(EditAlt)`
  width: 25px;
  color: ${({ color }) => color};
`;
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const Img = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;
const ImageDesWrp = styled.div`
  gap: 4px 0;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  p {
    font-size: 20px;
  }
`;
const ParametrsCon = styled.div``;
const ParamType = styled.div`
  display: flex;
  align-items: center;
  gap: 0 20px;
  margin: 18px 0;
`;
Icon.Moon = styled(Moon)`
  width: 25px;
  color: green;
`;
Icon.Grid = styled(Grid1x2)`
  width: 25px;
  color: yellowgreen;
`;
Icon.User = styled(UserCheck)`
  width: 25px;
  color: red;
`;
Icon.UserPlus = styled(UserPlus)`
  width: 25px;
  color: pink;
`;
const PTypeText = styled.p`
  margin: 0;
  color: ${({ color }) => color};
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
`;
export {
  ImageDesWrp,
  Container,
  Img,
  ImageContainer,
  MobileContainer,
  IconContainer,
  Icon,
  ParametrsCon,
  ParamType,
  PTypeText,
  DarkMode,
  Title,
};
