import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import Imagelink from './Components/Imagelink/Imagelink';
import FaceReco from './Components/FaceReco/FaceReco';
import ParticlesComponent from './Components/particles';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import Yapping from './Components/Yapping/Yapping';


import './App.css';
import 'tachyons';

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
<<<<<<< HEAD
    this.state = {
      input: '',
      imgurl: '',
      box: {}, //added later for the value of the blue border face
      route: 'signin',
      user : {
        name:'',
        email: '',
        password : '',
        entries: 0,
        joined : ''
      }
    };
=======
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
    console.log(this.state);
>>>>>>> 178b30e7 (the final form - you need to connect to the backend)
  }

  loadUser = (data) =>{
    this.setState ({
      user : {
        name:data.name,
        email : data.email,
        password : data.password,
        entries :data.entries,
        joined : data.joined

      }
    })
    console.log(this.state);
  }

  inputChange = (event) => {
    this.setState({ input: event.target.value });
  };


  calculateFaceLocations = (regions) => {
    if (regions && regions.length > 0) {
      const cFace = regions[0].region_info.bounding_box;
      const img = document.getElementById('imgg');
      const width = Number(img.width);
      const height = Number(img.height);
      console.log(width, height);
  
      return {
        leftcol: cFace.left_col * width,
        toprow: cFace.top_row * height,
        rightcol: width - cFace.right_col * width,
        bottomrow: height - cFace.bottom_row * height,
      };
    } else {
      console.log("No face regions detected");
      return {};  // Return an empty object or handle it as needed
    }
  };

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  };

<<<<<<< HEAD
  // buttonClick = () => {
  //   this.setState(
  //     { imgurl: this.state.input },
  //     () => {
  //       predictFaces(this.state.imgurl) //using predict function from CLar.js
  //         .then(response =>{
  //               if (response){
  //                   fetch('http://localhost:3000/image' , {
  //                     method: 'put',
  //                     headers: { 'Content-Type': 'application/json' },
  //                     body: JSON.stringify({
  //                       name : this.state.user.name
  //                     })
  //                     .then(response=>response.json())
  //                     .then(cnt => {
  //                        this.setState(Object.assign(this.state.user , { entries : cnt}));
  //                     })
  //                   })
  //           this.displayFaceBox(this.calculateFaceLocations(response))
  //         }
  //       ) 
          
  //     }
  //   );
  // };

  buttonClick = () => {
    this.setState(
      { imgurl: this.state.input },
      () => {
        predictFaces(this.state.imgurl) // Using predict function from Clar.js
          .then(response => {
            if (response) {
              // Update the image count on the server
              fetch('http://localhost:3000/image', {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: this.state.user.name
                })
              })
              .then(response => response.json())
              .then(cnt => {
                // Update the state with new entries count
                this.setState(prevState => ({
                  user: {
                    ...prevState.user,
                    entries: cnt
                  }
                }));
              });

              // Display the face box
              this.displayFaceBox(this.calculateFaceLocations(response));
            }
          })
          .catch(err => console.log('Error:', err)); // Handle any errors from predictFaces
      }
    );
  };
=======

buttonClick = () => {
  this.setState(
    { imgurl: this.state.input },

    () => {
      fetch('http://localhost:3000/detectFaces', { // here is deleted the predictfaces function and the Clasr.js file and moved it to the backend code for the security of the api 
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imgurl: this.state.imgurl
        })
      })
      .then(response => response.json())
      .then(response => {
          if (response) {
            // Update the image count on the server
            fetch('http://localhost:3000/image', {
              method: 'put',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id: this.state.user.id
              })
            })
            .then(response => response.json())
            .then(cnt => {
              // Update the state with new entries count
              this.setState(prevState => ({
                user: {
                  ...prevState.user,
                  entries: cnt
                }
              }));
            });

            // Display the face box
            this.displayFaceBox(this.calculateFaceLocations(response));
          }
        })
        .catch(err => console.log('Error:', err)); // Handle any errors from predictFaces
    }
  );
};




>>>>>>> 178b30e7 (the final form - you need to connect to the backend)


  onRoutChange = (route) => {
     if(route==='signin'){
      this.setState(initialState);
    }
    this.setState({ route: route });
   
  };

  render() {
    return (
      <div className='App'>
        <ParticlesComponent id='tspp' />

        <div className='content'>
          {this.state.route === 'home' ? (
            <div>
              
                <div className='nav-bar'>
                  <Logo />
                  {/* <p>Face detection test project</p> */}
                  <Navigation onRoutChange={this.onRoutChange} />
                </div>
                <Rank name = {this.state.user.name} entries={this.state.user.entries}/>

                <Imagelink
                  inputChange={this.inputChange}
                  buttonClick={this.buttonClick}
                />
                <div className='main-content'>
                  <div>
                    <FaceReco
                    className='face-reco'
                    imgurl={this.state.imgurl}
                    box={this.state.box}
                    />
                    </div>
                    <div>
                    <Yapping />
                    </div>
                </div>
            </div>
          ) : (
            <div>
              {this.state.route === 'signin' ? (
                <SignIn loadUser={this.loadUser} onRoutChange={this.onRoutChange} />
              ) : (
                <Register loadUser = {this.loadUser} onRoutChange={this.onRoutChange} />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
