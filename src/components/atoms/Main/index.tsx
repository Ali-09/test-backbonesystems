import StyledMain from './styled';

type MainProps = {
  children: JSX.Element,
  [rest:string]: any
};

function Main({ children, ...rest }: MainProps) {
  return <StyledMain {...rest}>{children}</StyledMain>;
}

export default Main;
