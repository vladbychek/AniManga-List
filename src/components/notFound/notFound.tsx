import { useTheme } from "../../themeContext";
import {
  NotFoundStyledImg,
  NotFoundText,
  NotFoundWrapper,
} from "./notFound.Styles";

const NotFoundImg = require("../img/notFound.png");

export const NotFound = () => {
  const currentTheme = useTheme();

  return (
    <NotFoundWrapper>
      <NotFoundText theme={currentTheme.theme}>not right page {`<3`}</NotFoundText>
      <NotFoundStyledImg src={NotFoundImg} alt="" />
    </NotFoundWrapper>
  );
};
