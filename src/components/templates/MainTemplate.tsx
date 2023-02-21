import { Container } from "@mui/material"
import { Box } from "@mui/material";
import { Header } from "@/src/components";
import { Main } from "@/src/components"

type MainTemplateProps = {
  children: JSX.Element
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <Box width="100%" height="100vh" sx={{ background: "rgb(244, 244, 245)" }}>
      <Header />
      <Main>
        <Container>
          {children}
        </Container>
      </Main>
    </Box>
  )
}

export default MainTemplate