import { createContext, useState } from "react";

const AuthContext = createContext({})

const AuthPovider = ({ children }) => {
    const [auth, setAuth] = useState(false)

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthPovider, AuthContext };
