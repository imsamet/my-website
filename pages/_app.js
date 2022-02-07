import NavTypeStore from '../store/navTypeStore'
import NavColorStore from '../store/navColorStore'

import '../styles/global.css'

function MyApp ({Component, pageProps}) {

    return  <NavTypeStore.Provider>
                <NavColorStore.Provider>
                    <Component {...pageProps}/>
                </NavColorStore.Provider>
            </NavTypeStore.Provider>
}

export default MyApp