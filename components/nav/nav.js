import { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import Context from '../../store/navStore'

import Style from './nav.module.css'
import img from '../../img/pp.jpg'
import { Figma, Github, Linkedin, Spotify, Soundcloud, Up } from '../icon/index'

function Nav() {

    const store = useContext(Context)
    const navRef = useRef()
    const [isContext, setContext] = useState(false)
    
    useEffect(() => {
        const ref = navRef.current

        if(ref.classList[1] != Style.small){// sadece Small modda hareket edebileceği için Small değilken, Small modda aldığı bottom ve right değerlerini sıfırlıyorum
            navRef.current.style.bottom = null
            navRef.current.style.right = null
        }

        if (!ref) return;

        const toggle = (e) => {

            if(!e.path) return false//Safari bog fix

            let i = true;

            e.path.map(value => {
                value == ref && (i = false)
            })

            i && setContext(false);
        }

        window.addEventListener('click', toggle)
        return function cleanup () {
            window.removeEventListener('click', toggle)
        }

    })

    const changeContext = () => {
        setContext(!isContext)
    }

    const chanceType = (type) => {
        store.setNavType(type)
    }

    let right, bottom
    let differenceX, differenceY

    const move = (e) => {

        // Top ve Left olarak değil Bottom ve Right olarak konumlandıracağım için nav'ın sağ alt köşesinin (bottom right) değerini hesaplıyorum
        const refRight = window.innerWidth - navRef.current.offsetLeft - navRef.current.scrollWidth;
        const refBottom = window.innerHeight - navRef.current.offsetTop - navRef.current.scrollHeight;

        //mouse'un konumunu da aynı şekilde bottom ve right şeklinde hesaplıyorum
        const mouseX = window.innerWidth - e.pageX
        const mouseY = window.innerHeight - e.pageY

        /*
            mouse'un tıklandığı yer ile nav'ın konumu arasındaki farkı alıyorum.
            Fakat mouse her hareket ettiğinde addeventlistener çalışıyor ve her seferinde tekrar fark hesaplıyor bu da nav'ın hareket etmesini engelliyor ve nav sabit kalıyor
            Bunu düzeltmek için difference değişkenlerini global tanımladım ve varsayılan değerleri undefined, böylece difference boşsa hesapla dediğimde sadece ilk tetiklenmede hesaplamış oluyorum
            yenıden konumlandırma için undefined yapmam gerek onu remove()'da yapıyorum
        */
        !differenceX && (differenceX = mouseX - refRight)
        !differenceY && (differenceY = mouseY - refBottom)

        //mouse konumundan farkı çıkartıp yeni konumu alıyorum
        right = mouseX - differenceX
        bottom = mouseY - differenceY


        if(navRef.current.classList[1] == Style.small){// sadece Small modda hareket edebileceği için Small değilse nav'a bottom ve right değerlerini vermiyorum
            navRef.current.style.transition = "0ms"
            navRef.current.style.right = `${right}px`
            navRef.current.style.bottom = `${bottom}px`
        }
    }

    const add = () => {
        window.addEventListener('mousemove', move)
    }

    const remove = () => {
        window.removeEventListener('mousemove', move)
        navRef.current.style.transition = null
        differenceX = undefined
        differenceY = undefined
    }

    return(
        <nav onMouseDown={add} onMouseUp={remove} className={cn(Style.nav, store.navType == "Medium" && Style.medium, store.navType == "Small" && Style.small)} ref={navRef}>
            <div className={Style.imgBox}>
                <img src={img.src}/>
            </div>
            <div className={Style.content}>

                <div className={Style.icons}>

                    <a target="_blank" rel="noopener noreferrer" href="http://github.com/imsamet"><Github/></a>
                    <a target="_blank" rel="noopener noreferrer" href="http://soundcloud.com/samet-cetin-627218651"><Soundcloud/></a>
                    <a target="_blank" rel="noopener noreferrer" href="http://github.com/imsamet"><Spotify/></a>
                    <a target="_blank" rel="noopener noreferrer" href="http://github.com/imsamet"><Linkedin/></a>
                </div>

                <div className={Style.items}>

                    <ul className={Style.ul}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">My Project</Link></li>
                        <li><Link href="/">Blog</Link></li>
                        <li><Link href="/">About Me</Link></li>
                    </ul>

                    <Up className={cn(isContext && Style.animation)} onClick={changeContext}/>
                </div>

            </div>

            <div className={cn(Style.context, isContext && Style.active)}>
                <ul>
                    <li className={cn(store.navType === "Large" && Style.selected)} onClick={() => {chanceType("Large")}}>Large</li>
                    <li className={cn(store.navType === "Medium" && Style.selected)} onClick={() => {chanceType("Medium")}}>Medium</li>
                    <li className={cn(store.navType === "Small" && Style.selected)} onClick={() => {chanceType("Small")}}>Small</li>
                </ul>
            </div>

        </nav>
    )
}

export default Nav