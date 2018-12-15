import React, { Component } from 'react';
import Img from 'react-image'





class Projectitem extends Component {
  handledelete(id)
    {
console.log(id)
      this.props.onDelete(id);
    }
  render() {
  
    
    return (
      <div  ref="Projectitem" className="Projectitem">
<div id="Projectitemcontainer">

        <div id="projectTile">
          <p><b> <u>Title</u> : </b> <a class="title">{this.props.project.title}</a>
          </p>
          <p><b> <u>Categoery</u> : </b> <a class="title">{this.props.project.categoery}</a>
          </p>
          <p><b> <u>Establish Date</u> : </b> <a class="title">{this.props.project.established}</a>
          </p>
          
          {/* <img src="/deleteBtn.png" /> */}
         <a href='#' onClick ={this.handledelete.bind(this,this.props.project.id)} > <div id="deletebtnimg" ref="deletebtnimg"> </div> </a>
        </div>
        </div>
      </div>
    );

    
  }
  

}

export default Projectitem;
