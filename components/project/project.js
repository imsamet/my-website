import { Figma, Vercel } from '../icon'
import Style from './project.module.css'
import img1 from '../../img/img1.png'
import img2 from '../../img/img2.png'

function Project ({head }) {
    return (
        <div className={Style.container}>

            <div className={Style.head}>

                <div className={Style.text}>
                    <h1>Daw Project</h1>
                    <span>React, 
                        <span>F</span>
                        <span>i</span>
                        <span>g</span>
                        <span>m</span>
                        <span>a</span>
                    </span>
                </div>

                <div className={Style.icon}>
                    <Figma/>
                    <Vercel/>
                </div>

            </div>

            <div className={Style.body}>

                <div className={Style.imgBox}>
                    <img src={img1.src}/>
                    <img src={img2.src}/>
                    <img src={img2.src}/>
                    <img src={img2.src}/>
                    <img src={img2.src}/>
                    <img src={img2.src}/>
                    <img src={img2.src}/>
                    <img src={img2.src}/>
                    <img src={img2.src}/>
                    <img src={img2.src}/>
                    <img src={img2.src}/>
                </div>

                <p>Nostrud eu irure consectetur Lorem ullamco consequat ipsum eiusmod. Et nostrud irure id proident anim incididunt id quis laboris et. Amet deserunt commodo nostrud irure incididunt dolor dolore sunt laboris ex id incididunt duis labore. Minim sunt consequat velit deserunt ipsum dolor voluptate labore deserunt aliquip tempor et officia commodo. Amet magna ullamco qui qui et ullamco. Reprehenderit sint consectetur quis proident nulla qui laborum tempor excepteur pariatur do sunt nulla. Nisi ea eu quis sunt nostrud duis nisi aute nisi magna cillum.</p>
            </div>

        </div>
    )
}

export default Project