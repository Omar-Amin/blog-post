import '../styles/globals.css'
import { AuthPovider } from './auth/authContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthPovider>
      <Component {...pageProps} />
    </AuthPovider>
  )
}

export default MyApp
