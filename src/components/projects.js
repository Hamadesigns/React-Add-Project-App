import React, { Component } from 'react';
import Projectitem from './projectItem';


class Projects extends Component {
    delproj(id)
    {
        this.props.onDelete(id);

    }

    render() {
        let projectsingleitem;

        if (this.props.projects) {
            projectsingleitem = this.props.projects.map(projectsingle => {
                console.log(projectsingle);


              
                return (

                    <Projectitem key={projectsingle.id} project={projectsingle} onDelete={this.delproj.bind(this)} />
                )

            });
        }


        return (
            <div className="Projects">
                <div id="projectPlace">
                <div id="centerprojectPlace">

                    {projectsingleitem}
                </div>
                </div>
            </div>

        );
    }
}

export default Projects;
