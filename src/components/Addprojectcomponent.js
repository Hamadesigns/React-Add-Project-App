import React, { Component } from 'react';
import dropdown from './dropdown.png'
import { fail } from 'assert';
import uuid from 'uuid';

// import { isNull } from 'util';
// import Popupcomponent from './popupcomponent';

class Addprojectcomponent extends Component {
    constructor() {
        super();
        this.state =
            {
                newProject: {}
            }
    }

    static defaultProps =
        {
            catetories: ['Web Design', 'Business App', 'Shopping Site', 'E-commerce']
        }
    handleSubmit(e) {

        // let  visibility = document.getElementById("message").style.visibility = "visible";

        if (this.refs.title.value === "" || this.refs.established.value === "") {
            // visibility = "visible";
            alert("please fill the form")
        }

        else if (this.refs.title.value) {
            // document.getElementById("message").style.visibility = "hidden";

            // visibility = "hidden";


            this.setState({
                newProject:
                    {
                        id: uuid.v4(), 
                        title: this.refs.title.value,
                        categoery: this.refs.singlecategoery.value,
                        established: this.refs.established.value

                    }
            }, function () {

                this.props.addproject(this.state.newProject)
            });

        }


        e.preventDefault();




    }

    render() {


        let options = this.props.catetories.map(singlecategoery => {
            return (
                <option key={singlecategoery} value={singlecategoery}> {singlecategoery}  </option>
            )
        });

        return (
            <div className="Addprojectcomponent">
                <div id="Addprojectbar">
                    <h4>Add Project</h4>



                    <div>

                        <form onSubmit={this.handleSubmit.bind(this)}>

                            <div id="forminput">

                                <label>
                                    Title
</label>
                                <br />
                                <input type="text" ref="title" />
                                <p id="message"> Title is required </p>
                                <br />
                            </div>
                            <div id="forminput">

                                <label>
                                    Categoery
</label>
                                <br />
                                <div id="drpdown">
                                    <select ref="singlecategoery">

                                        {options}


                                    </select>


                                </div>

                            </div>
                            <div id="forminput">

                                <label>
                                    Establised Date
</label>
                                <br />
                                <input type="text" ref="established" />
                                <br />
                            </div>
                            <input type="submit" value="Submit" id="SubmitBtn" />
                        </form>

                    </div>

                </div>
            </div>

        );
    }
}

export default Addprojectcomponent;
