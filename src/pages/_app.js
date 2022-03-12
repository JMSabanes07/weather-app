import { ThemeProvider } from 'styled-components'
import { darkTheme } from 'styles/theme'
import { GlobalStyles } from 'styles/globalStyles'
import Head from 'next/head'
import { GeoLocationCtx } from 'contexts/geoLocation'
function MyApp({ Component, pageProps }) {
  return (
    <GeoLocationCtx>
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
    </GeoLocationCtx>
  )
}

export default MyApp
