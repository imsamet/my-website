import cn from 'classnames'
import Style from './item.module.css'
import {Done} from '../../icon'

function Item({value}) {
    return (
        <label className={cn(Style.container, value == 'All' && Style.all, value == 'Design' && Style.design, value == "Music" && Style.music)}>
            <input className={Style.input} type="checkbox"/>
            <span className={Style.checkBox}>
                <Done/>
            </span>
            <span className={Style.text}>
                {
                    value == "Design" ?
                        <>
                            <span>D</span>
                            <span>e</span>
                            <span>s</span>
                            <span>i</span>
                            <span>g</span>
                            <span>n</span>
                        </>
                    :
                        value
                }
            </span>
        </label>
    )
}

export default Item