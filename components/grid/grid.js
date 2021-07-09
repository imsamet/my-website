import PropTypes from 'prop-types'
import cn from 'classnames'
import Style from './grid.module.css'

function Grid ({children, start, end, center, around, between, evenly}) {

    return(
        <div className={cn(Style.grid, start && Style.start, end && Style.end, center && Style.center, around && Style.around, between && Style.between, evenly && Style.evenly)}>
            {children}
        </div>
    )
}
export default Grid

Grid.propTypes = {
    start: PropTypes.bool,
    end: PropTypes.bool,
    center: PropTypes.bool,
    around: PropTypes.bool,
    between: PropTypes.bool,
    evenly: PropTypes.bool
}