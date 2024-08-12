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
import { predictFaces } from './Components/Clar/Clar';

import './App.css';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
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
    //a ready form from clarifai and updated by gpt
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
  };

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  };

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


  onRoutChange = (route) => {
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
                    <FaceReco
                    className='face-reco'
                    imgurl={this.state.imgurl}
                    box={this.state.box}
                    />
                    {/* <Yapping /> */}
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
