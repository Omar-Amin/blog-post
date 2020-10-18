import { createContext, useState } from "react";

const AuthContext = createContext({})

const AuthPovider = ({ children }) => {
    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState(null)

    return (
        <AuthContext.Provider value={{ auth, user, setUser, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthPovider, AuthContext };
