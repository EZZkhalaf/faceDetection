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
    };
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

  buttonClick = () => {
    this.setState(
      { imgurl: this.state.input },
      () => {
        predictFaces(this.state.imgurl) //using predict function from CLar.js
          .then((response) =>
            this.displayFaceBox(this.calculateFaceLocations(response))
          )
          .catch((err) => console.log('Error during face prediction:', err));
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
                <Rank />

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
                <SignIn onRoutChange={this.onRoutChange} />
              ) : (
                <Register onRoutChange={this.onRoutChange} />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
