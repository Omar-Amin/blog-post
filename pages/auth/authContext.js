import { createContext, useEffect, useState } from "react";
import { useCookies } from 'react-cookie'

const AuthContext = createContext({})

const AuthPovider = ({ children }) => {
    const [cookies, setCookie] = useCookies(['token']);
    const token = cookies.token
    var authTmp = false
    var userTmp = null

    if (token) {
        authTmp = token.auth
        userTmp = token.user
    }

    console.log(token)

    const [auth, setAuth] = useState(authTmp)
    const [user, setUser] = useState(userTmp)

    return (
        <AuthContext.Provider value={{ auth, user, setUser, setAuth, setCookie }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthPovider, AuthContext };
