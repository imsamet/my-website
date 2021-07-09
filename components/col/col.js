import PropTypes from 'prop-types'
import cn from 'classnames'
import Style from './col.module.css'

function Col ({children, xs, sm, md, lg, xl}) {

    const classXs = 
        xs == 1 ? Style.xs1 :
        xs == 2 ? Style.xs2 :
        xs == 3 ? Style.xs3 :
        xs == 4 ? Style.xs4 :
        xs == 5 ? Style.xs5 :
        xs == 6 ? Style.xs6 :
        xs == 7 ? Style.xs7 :
        xs == 8 ? Style.xs8 :
        xs == 9 ? Style.xs9 :
        xs == 10 ? Style.xs10 :
        xs == 11 ? Style.xs11 :
        xs == 12 && Style.xs12

    const classSm = 
        sm == 1 ? Style.sm1 :
        sm == 2 ? Style.sm2 :
        sm == 3 ? Style.sm3 :
        sm == 4 ? Style.sm4 :
        sm == 5 ? Style.sm5 :
        sm == 6 ? Style.sm6 :
        sm == 7 ? Style.sm7 :
        sm == 8 ? Style.sm8 :
        sm == 9 ? Style.sm9 :
        sm == 10 ? Style.sm10 :
        sm == 11 ? Style.sm11 :
        sm == 12 && Style.sm12

    const classMd = 
        md == 1 ? Style.md1 :
        md == 2 ? Style.md2 :
        md == 3 ? Style.md3 :
        md == 4 ? Style.md4 :
        md == 5 ? Style.md5 :
        md == 6 ? Style.md6 :
        md == 7 ? Style.md7 :
        md == 8 ? Style.md8 :
        md == 9 ? Style.md9 :
        md == 10 ? Style.md10 :
        md == 11 ? Style.md11 :
        md == 12 && Style.md12

    const classLg = 
        lg == 1 ? Style.lg1 :
        lg == 2 ? Style.lg2 :
        lg == 3 ? Style.lg3 :
        lg == 4 ? Style.lg4 :
        lg == 5 ? Style.lg5 :
        lg == 6 ? Style.lg6 :
        lg == 7 ? Style.lg7 :
        lg == 8 ? Style.lg8 :
        lg == 9 ? Style.lg9 :
        lg == 10 ? Style.lg10 :
        lg == 11 ? Style.lg11 :
        lg == 12 && Style.lg12

    const classXl = 
        xl == 1 ? Style.xl1 :
        xl == 2 ? Style.xl2 :
        xl == 3 ? Style.xl3 :
        xl == 4 ? Style.xl4 :
        xl == 5 ? Style.xl5 :
        xl == 6 ? Style.xl6 :
        xl == 7 ? Style.xl7 :
        xl == 8 ? Style.xl8 :
        xl == 9 ? Style.xl9 :
        xl == 10 ? Style.xl10 :
        xl == 11 ? Style.xl11 :
        xl == 12 && Style.xl12
        
    return(
        <div className={cn(Style.item, classXs, classSm, classMd, classLg, classXl)}>
            {children}
        </div>
    )
}

export default Col

Col.propTypes = {
    xs: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool
    ]),
    sm: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool
    ]),
    md: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool
    ]),
    lg: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool
    ]),
    xl: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool
    ])
}