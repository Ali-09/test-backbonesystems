import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { AppProps } from 'next/app'
import { CssBaseline } from "@mui/material";
import { MainTemplate } from "@/src/components"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <MainTemplate>
        <Component {...pageProps} />
      </MainTemplate>
    </>
  )
}
