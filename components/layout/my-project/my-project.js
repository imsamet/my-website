import Style from './my-project.module.css'

import Filter from '../../filter/filter'
import Project from '../../project/project'
import Nav from '../../nav/nav'

function myProject() {
    return(
        <>
            <div className={Style.container}>

                <div className={Style.content}>
                    <Filter/>
                </div>

                <div className={Style.content}>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                </div>

            </div>
            <Nav/>
        </>
    )
}

export default myProject