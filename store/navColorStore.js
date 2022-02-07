import { createContext, useContext, useState } from "react";

const Context = createContext()

function Provider ({children}) {
    const [navColor, setNavColor] = useState("Code")

    return <Context.Provider value={{navColor, setNavColor}}>{children}</Context.Provider>
}

const useNavColor = () => useContext(Context)

export default {Provider, useNavColor}
