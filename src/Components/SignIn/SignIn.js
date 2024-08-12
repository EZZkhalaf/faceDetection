import React from "react";
import './SignIn.css';
import 'tachyons';
class SignIn extends React.Component {
    constructor(props){
        super (props);
        this.state={
            signInEmail : '',
            signInPass : '',

        }
    }

    emailChange = (event) =>{
        this.setState({signInEmail : event.target.value});
    }
    passChange = (event) =>{
        this.setState({signInPass : event.target.value});
    }
    signInButton = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/signin', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: this.state.signInEmail,
            password: this.state.signInPass
          })
        })
          .then(response => response.json())
          .then(user => {
            if (user.name) { // Check if user.name exists
              this.props.loadUser(user); 
              this.props.onRoutChange('home'); // Change route to 'home'
            } else {
              console.log('Invalid email or password');
            }
          })
          .catch(err => console.log('Error:', err)); // Handle any errors that occur during fetch
      }
      
     render() {
        const {onRoutChange} = this.props;
        const {loadUser} = this.props;
        return (
            <div>
                <article className="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" >
                <main className="pa4 black-80">
                    <form className="measure ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend 
                        className="f4 fw6 ph0 mh0">
                            Sign In
                        </legend>
                        <div className="mt3">
                        <label 
                            className="db fw6 lh-copy f6" 
                            htmlFor="email-address">
                                Email
                        </label>
                        <input 
                        onChange={this.emailChange}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address" 
                            id="email-address" 
                        />
                        </div>
                        <div className="mv3">
                        <label 
                            className="db fw6 lh-copy f6" 
                            htmlFor="password">
                                Password
                        </label>
                        <input 
                            onChange={this.passChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="password" 
                            name="password" 
                            id="password" 
                        />
                        </div>

                    </fieldset>
                    <div>
                        <input 
                        onClick={this.signInButton}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Sign in" 
                        />
                    </div>
                    <div className="lh-copy mt3">
                        
                        {/* <a 
                        onClick={() => onRoutChange('register')}
                        href="#0" 
                        className="f6 link dim black db">
                            register
                        </a> */}
                        <input 
                        onClick={() => onRoutChange('register')}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="register" 
                        />
                    </div>
                    </form>
                </main>
                </article>
            </div>
        )
    }
}
export default SignIn;