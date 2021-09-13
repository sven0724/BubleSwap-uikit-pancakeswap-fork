import styled from "styled-components";
import Button from "../../../components/Button/Button";

const MenuButton = styled(Button)`
  color: #000000;
  padding: 0 8px;
  border-radius: 8px;
  height: 100%;
  margin: 0;
`;
MenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

export default MenuButton;
