import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import NavTypeStore from '../../store/navTypeStore'
import NavColorStore from '../../store/navColorStore'

import Style from './nav.module.css'
import img from '../../img/pp.jpg'
import { Figma, Github, Linkedin, Spotify, Soundcloud, Up } from '../icon/index'

function Nav() {

    const {navType, setNavType} = NavTypeStore.useNavType()
    const {navColor, setNavColor} = NavColorStore.useNavColor()
    const navRef = useRef()
    const [isContext, setContext] = useState(false)
    let navPositionLocalStorage = typeof window !== 'undefined' && localStorage.getItem('nav-position-samet.com') ? JSON.parse(localStorage.getItem('nav-position-samet.com')) : {right: 0, bottom: 0}

    useEffect(() => {// Context menü
        
        const ref = navRef.current

        if (!ref) return;

        
        // burada context menü açıkken nav dışında bir yere tıklandığında context menünün kapanmasını sağlıyoruz

        const toggle = (e) => {

            if(!e.path) return false//Safari bug fix

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

    }, [isContext])

    const changeContext = () => {
        setContext(!isContext)
    }

    const chanceType = (type) => {
         setNavType(type)
         setContext(false)
    }

    useEffect(() => {

        console.log(navPositionLocalStorage)

        if(navType == "Large"){// sadece Small ve Medium modda hareket edebileceği için Large mod için bottom ve right değerlerini sıfırlıyorum
            navRef.current.style.bottom = null
            navRef.current.style.right = null
        }
        
        if(navType == "Small" || navType == "Medium"){// sadece Small modda hareket edebileceği için Small değilse nav'a bottom ve right değerlerini vermiyorum
            navRef.current.style.transition = "0ms" // gecikme olduğunda düzgün hareket etmiyor, down anında kapatıp up anında tekrar eski haline getiriyorum.
            navRef.current.style.right = `${navPositionLocalStorage.right}px`
            navRef.current.style.bottom = `${navPositionLocalStorage.bottom}px`
        }

    }, [])

    let differenceX, differenceY

    const move = (e) => {

        //Sayfanın sağ alt köşesi 0 noktası olacak şekilde hesaplanıyor.
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

        //mouse konumundan farkı çıkartıp yeni konumu alıyorum aynı zamanda sayfanın dışına çıkmasını da engelliyorum
        const newPosition = 
            {
                right : 
                        (mouseX - differenceX) <= 0 ? 0 :
                        (mouseX - differenceX) >= (window.innerWidth - navRef.current.scrollWidth) ? window.innerWidth - navRef.current.scrollWidth : mouseX - differenceX,
                bottom :
                        (mouseY - differenceY) <= 0 ? 0 :
                        (mouseY - differenceY) >= (window.innerHeight - navRef.current.scrollHeight) ? window.innerHeight - navRef.current.scrollHeight : mouseY - differenceY
            }

        localStorage.setItem('nav-position-samet.com', JSON.stringify(newPosition))

        if(navType == "Small" || navType == "Medium"){// sadece Small modda hareket edebileceği için Small değilse nav'a bottom ve right değerlerini vermiyorum
            navRef.current.style.transition = "0ms" // gecikme olduğunda düzgün hareket etmiyor, down anında kapatıp up anında tekrar eski haline getiriyorum.
            navRef.current.style.right = `${newPosition.right}px`
            navRef.current.style.bottom = `${newPosition.bottom}px`
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
        <nav 
            onMouseDown={add} 
            onMouseUp={remove} 
            className={cn(
                Style.nav, 
                navColor == "Code" && Style.code, navColor == "Design" && Style.design, navColor == "Music" && Style.music, 
                navType == "Large" && Style.large, navType == "Medium" && Style.medium, navType == "Small" && Style.small)} 
            ref={navRef}
        >
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
                        <li><Link href="/my-project">My Project</Link></li>
                        <li><Link href="/">Blog</Link></li>
                        <li><Link href="/">About Me</Link></li>
                    </ul>

                    <Up className={cn(isContext && Style.animation)} onClick={changeContext}/>
                </div>

            </div>

            <div className={cn(Style.context, isContext && Style.active)}>
                <ul>
                    <li className={cn(navType === "Large" && Style.selected)} onClick={() => {chanceType("Large")}}>Large</li>
                    <li className={cn(navType === "Medium" && Style.selected)} onClick={() => {chanceType("Medium")}}>Medium</li>
                    <li className={cn(navType === "Small" && Style.selected)} onClick={() => {chanceType("Small")}}>Small</li>
                </ul>
            </div>

        </nav>
    )
}

export default Nav