import '../styles/globals.css'
import { AuthPovider } from './auth/authContext'
import { CookiesProvider } from 'react-cookie'

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <AuthPovider>
        <Component {...pageProps} />
      </AuthPovider>
    </CookiesProvider>
  )
}

export default MyApp
