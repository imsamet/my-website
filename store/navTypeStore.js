import { createContext, useContext, useState } from "react";

const Context = createContext()

function Provider ({children}) {
    const [navType, setNavType] = useState("Medium")

    return <Context.Provider value={{navType, setNavType}}>{children}</Context.Provider>
}

const useNavType = () => useContext(Context)

export default {Provider, useNavType}
