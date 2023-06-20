import { useState, useEffect, useContext, createContext } from "react";

// context creation
const AuthContext = createContext();

//
const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        user: null,
        token: ""
    });
    useEffect(() => {
        let storedData = localStorage.getItem("auth");
        if (storedData) {
            let parsedData = JSON.parse(storedData);
            setAuth({
                ...auth,
                user: parsedData.user,
                token: parsedData.token
            })
        }
    }, []);// here if i provide auth in dependency -- infinite loop 

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
};


// custom hook
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }