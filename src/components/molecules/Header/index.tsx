import { StyledHeader, StyledLogo } from "./styled";
import ImageLogo from "@/src/assets/images/logo.svg";

const Header = () => {
  return (
    <StyledHeader>
        <StyledLogo alt="logo" priority quality={75} fill src={ImageLogo} />
    </StyledHeader>
  )
}

export default Header;