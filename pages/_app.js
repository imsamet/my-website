import { useState } from 'react'
import Context from '../store/navStore'

import '../styles/global.css'

function MyApp ({Component, pageProps}) {

    const [navType, setNavType] = useState("Small")

    return  <Context.Provider value={{navType, setNavType}}>
                <Component {...pageProps}/>
            </Context.Provider>
}

export default MyApp