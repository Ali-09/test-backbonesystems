import StyledMain from "./styled";

type MainProps = {
    children: JSX.Element,
    [rest:string]: any
}

const Main = ({ children, ...rest }: MainProps) => {
  return (
    <StyledMain {...rest}>{children}</StyledMain>
  )
}

export default Main