import '../styles/globals.css'
import AuthContext from '../context/AuthContext'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return (
  <AuthContext.Provider>
    <NavBar/>
    <content>
      <Component {...pageProps} />
    </content>
  </AuthContext.Provider>
  )
}

export default MyApp
