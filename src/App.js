import React, { Component } from 'react';
import Projects from './components/projects';
import Addprojectcomponent from './components/Addprojectcomponent';
// import drpdown from './drpdown.png'
import uuid from 'uuid';
// import Popupcomponent from './components/popupcomponent'




import './App.css';

class App extends Component {
constructor()
{
  super();
  this.state =
  {
    projects:[
      //  {
      //    title: "Business Website",
      //   categoery: "web design",
      //   established: "1990 "},
      //   {
      //     title: "Shopping Website",
      //    categoery: "ecommerce",
      //    established: "2010 "},
      //    {
      //     title: "Search engine",
      //    categoery: "",
      //    established: "1990 "},
      //    {
      //     title: "Business Website",
      //    categoery: "web design",
      //    established: "1990 "
      //   },
      //   {
      //     title: "Business Website",
      //    categoery: "web design",
      //    established: "1990 "},
      //    {
      //      title: "Shopping Website",
      //     categoery: "ecommerce",
      //     established: "2010 "},
      //     {
      //      title: "Search engine",
      //     categoery: "",
      //     established: "1990 "},
      //     {
      //      title: "Business Website",
      //     categoery: "web design",
      //     established: "1990 "
      //    }
      
    ]
  }
}
  componentWillMount()
  {
    this.setState({projects:[  {
      id: uuid.v4(),
         title: "Business Website",
        categoery: "web design",
        established: "1990 "},
        {
          id: uuid.v4(),
          title: "Shopping Website",
         categoery: "ecommerce",
         established: "2010 "},
         {
          id: uuid.v4(),
          title: "Search engine",
         categoery: "",
         established: "1990 "},
         {
          id: uuid.v4(),
          title: "Business Website",
         categoery: "web design",
         established: "1990 "
        },
        {
          id: uuid.v4(),
          title: "Business Website",
         categoery: "web design",
         established: "1990 "},
         {
          id: uuid.v4(),
           title: "Shopping Website",
          categoery: "ecommerce",
          established: "2010 "},
          {
            id: uuid.v4(),
           title: "Search engine",
          categoery: "",
          established: "1990 "},
          {
            id: uuid.v4(),
           title: "Business Website",
          categoery: "web design",
          established: "1990 "
         }
    ]})
  }

  handlenewproject(project)
  {
    // console.log(project);
  // console.log(this.state.projects.lenght);
    
    let allprojects = this.state.projects;
    allprojects.push(project)
    this.setState({projects: allprojects})
  }

  handleDlelete(id)
  {
   let projects = this.state.projects;
   let index = projects.findIndex(x=> x.id === id)
   projects.splice(index,1);
   this.setState({projects:projects})
  

  }
  render() {
    
    // console.log(this.state.projects[0].id);
    return (
      
      <div className="App" id="App">
   
    <div id="heading">
Hello React Fam
    </div>
   <Addprojectcomponent addproject={this.handlenewproject.bind(this)}/>
    <Projects projects={ this.state.projects } onDelete = {this.handleDlelete.bind(this)}/>
      </div>
    );
  }
}

export default App;
