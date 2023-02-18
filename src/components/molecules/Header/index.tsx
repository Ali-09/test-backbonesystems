import { StyledHeader, StyledLogo } from "./styled";
import ImageLogo from "@/src/assets/images/logo.svg";

const Header = () => {
  return (
    <StyledHeader>
        <StyledLogo alt="logo" fill src={ImageLogo} />
    </StyledHeader>
  )
}

export default Header;