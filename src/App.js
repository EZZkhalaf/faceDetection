
import React, { Component } from 'react';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import XO from './Components/Projects/XO/XOGame';
import ColorChanger from './Components/Projects/ColorChanger/ColorChanger';
import FaceModel from './Components/FaceModel/FaceModel';
import Todo from './Components/Projects/Todo/Todo';
import toast, { Toaster } from 'react-hot-toast';


import './App.css';
import 'tachyons';
import { Home } from './Components/Home/Home';
import { ButtonClickFetch, FaceButtonHook } from './Hooks/FaceButtonHook';

const initialState = {
  input: '',
  imgurl: '',
  box: {}, //added later for the value of the blue border face
  route: 'signin',
  user : {
      id :'',
      name:'',
      email: '',
      password : '',
      entries: 0,
      joined : ''
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = initialState;
    }
  

  loadUser = (data) =>{
    this.setState ({
      user : {
        id : data.userid,
        name:data.username,
        email : data.useremail,
        password : data.password,
        entries :data.entries,
        joined : data.joined

      }
    })
    console.log("the user data" , this.state);
  }

  componentDidMount(){
    const auth_user = JSON.parse(localStorage.getItem("user"));
    
    if(auth_user){
      this.setState({
        user:auth_user,
        route:'home',
      });
    }
  }


  onRoutChange = (route) => {
    if(route==='signin'){
     this.setState(initialState);
   }
   this.setState({ route: route });
  
 };
 

  inputChange = (event) => {
    this.setState({ input: event.target.value });
  };

buttonClick = async() => {
  try{
    ButtonClickFetch({
      input:this.state.input,
      user:this.state.user,
        setImgurl: imgurl=>this.setState({imgurl}),
        // displayFaceBox:this.displayFaceBox ,
        setUserEntries: entries=>{
          this.setState(prevState =>({
            user : {
              ...prevState.user , 
              entries 
            },
          }))
        },
    })
  }catch(err){
    toast.error("error in the face MODEL")
  }
  
  
};


 

render() {
    return (
      <div className="App">
        <div className="content">
          {
           this.state.route === 'Todo' ? (
              //  this part added to the program but still want to implement the backend and fix some issues
              <Todo /> //the problem here when i add an element it refresh the whole page 
            ):
            
            
            
            this.state.route === "basket" ? ( // Check if the route is "XO"
                <ColorChanger onRoutChange={this.onRoutChange}/>
                  // Render the XO component
            ) :
            
            
            
                      
            this.state.route === "XO" ? ( // Check if the route is "bucket"
                 <XO onRoutChange={this.onRoutChange} />
             ) :
            
            
            
             this.state.route === "faceDetection" ?(
                          //face detection model 
                <FaceModel
                   name ={this.state.user.name} entries={this.state.user.entries} 
                   inputChange={this.inputChange} buttonClick={this.buttonClick} 
                   imgurl={this.state.imgurl} box={this.state.box}
                   onRoutChange={this.onRoutChange}
                 />
             ) :  
          
          this.state.route === "home" ? ( // Check if the route is "home"
              <div>
                
              <Home 
              onRoutChange={this.onRoutChange} 
              user={this.state.user}
              name = {this.state.user.name}
              inputChange={this.inputChange}
              buttonClick={this.buttonClick}
              imgurl={this.state.imgurl}
              box={this.state.box}
              route = {this.state.route}
              />
              </div>
          ) :
          
          
          this.state.route === "signin" ? ( // Check if the route is "signin"
            <SignIn loadUser={this.loadUser} onRoutChange={this.onRoutChange} />
          ) :
          
          
          ( // Default to "register" route
            <Register loadUser={this.loadUser} onRoutChange={this.onRoutChange} />
          )}
        </div>
        <Toaster />
      </div>
    );
    
  }
}



export default App;
