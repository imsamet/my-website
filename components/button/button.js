import PropTypes from 'prop-types'
import cn from 'classnames'

import Style from './button.module.css'

function Button ({position, display, width, height, top, bottom, right, left, margin, border, padding, borderRadius, color, fontSize, opacity, backgroundColor, pointer, hover, center, className, children, ...props}) {

    const style = {
        position: position,
        display: display,

        width: width,
        height: height,
        top: top,
        bottom: bottom,
        right: right,
        left: left,

        margin: margin,
        border: border,
        padding: padding,
        borderRadius: borderRadius,

        color: color,
        fontSize: fontSize,
        opacity: opacity,
        backgroundColor: backgroundColor,
    }

    return(
        <button style={style} className={cn(Style.button, pointer && Style.pointer, hover && Style.hover, center && Style.center, className)} {...props}>
            {children}
        </button>
    )
}

Button.propTypes = {
    pointer: PropTypes.bool,
    hover: PropTypes.bool,
    center: PropTypes.bool,

    position: PropTypes.string,
    display: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    top: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    bottom: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    right: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    left: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    margin: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    border: PropTypes.string,
    padding: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    borderRadius: PropTypes.number,

    color: PropTypes.string,
    fontSize: PropTypes.number,
    opacity: PropTypes.number,
    backgroundColor: PropTypes.string
}
Button.defaultProp = {
    pointer: false,
    hover: false,
    center: false,
    position: "relative",
}

export default Button