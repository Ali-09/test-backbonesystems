import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { AppProps } from 'next/app'
import { CssBaseline } from "@mui/material";
import { store } from '@/src/store'
import { Provider } from 'react-redux'
import { MainTemplate } from "@/src/components"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CssBaseline />
      <MainTemplate>
        <Component {...pageProps} />
      </MainTemplate>
    </Provider>
  )
}
