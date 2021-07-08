import Style from './header.module.css'
import {Github, Google, Linkedin, Microsoft, Soundcloud, Spotify} from '../icon'
import Button from '../button/button'

function Header() {
    return(
        <header className={Style.header}>
            <div className={Style.contentBox}>

                <h1 className={Style.differentColor}>
                    <span>D</span>
                    <span>e</span>
                    <span>s</span>
                    <span>i</span>
                    <span>g</span>
                    <span>n</span>
                </h1>
                <h1>Code</h1>
                <h1>Music</h1>

                <p>Ipsum cillum aliquip minim id ea proident consequat nostrud id ex eiusmod quis. Occaecat ad enim aliquip anim eiusmod eu occaecat aliqua eiusmod. Cillum est ad amet voluptate. Do pariatur deserunt enim minim sint anim nulla non velit consequat cillum sit.</p>
            
                <Button
                    pointer
                    hover
                    backgroundColor={'var(--grey)'}
                    padding={'11px 28px'}
                    margin={'30px 0 0 0'}
                    borderRadius={5}
                >Go</Button>

            </div>
            <div className={Style.iconBox}>
                <a target="_blank" rel="noopener noreferrer" href="http://github.com/imsamet"><Github/></a>
                <a target="_blank" rel="noopener noreferrer" href="#"><Soundcloud/></a>
                <a target="_blank" rel="noopener noreferrer" href="#"><Spotify/></a>
                <a href="mailto:imsametcetin@gmail.com"><Google/></a>
                <a href="mailto:imsamet@outlook.com"><Microsoft/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/samet-%C3%A7etin-674954181/"><Linkedin/></a>
            </div>
        </header>
    )
}

export default Header