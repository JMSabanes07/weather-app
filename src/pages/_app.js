import { ThemeProvider } from 'styled-components'
import { darkTheme } from 'styles/theme'
import { GlobalStyles } from 'styles/globalStyles'
import Head from 'next/head'
import { WeatherCtx } from 'contexts/weatherContext'
/* to load animation for a specific spinner */
import 'spinners-react/lib/SpinnerCircular.css'

/* to load animations for all spinners at once */
import 'spinners-react/lib/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <WeatherCtx>
      <ThemeProvider theme={darkTheme}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </WeatherCtx>
  )
}

export default MyApp
