import Style from './my-project.module.css'

import Filter from '../../filter/filter'
import Project from '../../project/project'
import Nav from '../../nav/nav'


import Grid from '../../grid/grid'
import Col from '../../col/col'

function myProject() {
    return(
        <>
            <div className={Style.container}>
                <Grid center>

                    <Col xs={2} sm={3} md={3} lg={3} xl={2}>
                        <Filter/>
                    </Col>

                    <Col xs={8} sm={8} md={7} lg={7} xl={7}>
                        <Project/>
                        <Project/>
                        <Project/>
                        <Project/>
                        <Project/>
                        <Project/>
                        <Project/>
                    </Col>

                </Grid>
            </div>
            <Nav/>
        </>
    )
}

export default myProject