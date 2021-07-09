import Style from './filter.module.css'
import Item from './item/item'

function Filter () {
    return(
        <div className={Style.filter}>
            <Item
                value={'All'}
            />
            <Item
                value={'Design'}
            />
            <Item
                value={'Code'}
            />
            <Item
                value={'Music'}
            />
        </div>
    )
}

export default Filter