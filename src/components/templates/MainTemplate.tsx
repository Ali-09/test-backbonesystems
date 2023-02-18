import { Box } from "@mui/material";
import { Header } from "@/src/components";

type MainTemplateProps = {
    children: JSX.Element
}

const MainTemplate = ({children} : MainTemplateProps) => {
  return (
    <Box width="100%" height="100vh" sx={{ background: "rgb(244, 244, 245)"}}>
        <Header/>
        {children}
    </Box>
  )
}

export default MainTemplate