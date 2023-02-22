import ImageLogo from '@/src/assets/images/logo.svg';
import { StyledHeader, StyledLogo } from './styled';

function Header() {
  return (
    <StyledHeader>
      <StyledLogo alt="logo" priority quality={75} fill src={ImageLogo} />
    </StyledHeader>
  );
}

export default Header;
