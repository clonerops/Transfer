import {
  FC,
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react'
import { LayoutSplashScreen } from '../../../../_cloner/layout/core'
import { AuthenticationModel } from './_models'
import * as authHelper from './AuthHelpers'
import { WithChildren } from '../../../../_cloner/helpers'
import Cookies from 'js-cookie'

type AuthContextProps = {
  auth: AuthenticationModel | undefined
  saveAuth: (auth: AuthenticationModel | undefined) => void
  currentUser: AuthenticationModel | undefined
  setCurrentUser: Dispatch<SetStateAction<AuthenticationModel | undefined>>
  logout: () => void
}

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => { },
  currentUser: undefined,
  setCurrentUser: () => { },
  logout: () => { },
}

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState)

const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider: FC<WithChildren> = ({ children }) => {
  const [auth, setAuth] = useState<AuthenticationModel | undefined>(authHelper.getAuth())
  const [currentUser, setCurrentUser] = useState<AuthenticationModel | undefined>()

  const saveAuth = (auth: AuthenticationModel | undefined) => {
    setAuth(auth)
    if (auth) {
      authHelper.setAuth(auth)
    } else {
      // authHelper.removeAuth()
    }
  }

  const logout = () => {
    saveAuth(undefined)
    setCurrentUser(undefined)
  }

  return (
    <AuthContext.Provider value={{ auth, saveAuth, currentUser, setCurrentUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

const AuthInit: FC<WithChildren> = ({ children }) => {
  const { auth, logout, setCurrentUser } = useAuth()
  // const didRequest = useRef(false)
  const [showSplashScreen, setShowSplashScreen] = useState(true)
  // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
  useEffect(() => {
    const requestUser = async () => {
      try {
        // if (!didRequest.current) {

        // if (auth) {
        setCurrentUser(auth)
        
        // }
        // }
      } catch (error) {
        // if (!didRequest.current) {
        logout()
        // }
      } finally {
        setShowSplashScreen(false)
      }

      // return () => (didRequest.current = true)
    }

    if (auth && auth.data?.jwtToken) {
      requestUser()
    }
    else {
      logout()
      setShowSplashScreen(false)
    }
    // eslint-disable-next-line
  }, [])

  return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>
}

export { AuthProvider, AuthInit, useAuth }