import React from "react";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        };
    }

    regName = (event) => {
        this.setState({ name: event.target.value });
    };

    regEmail = (event) => {
        this.setState({ email: event.target.value });
    };

    regPass = (event) => {
        this.setState({ password: event.target.value });
    };

    regSubmit = (event) => {
        // Prevent the default form submission
        event.preventDefault();

        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            }),
        })
        .then(response => response.json())
        .then(user => {

            if (user.id) {
                this.props.loadUser(user);
                this.props.onRoutChange('home');
            } else {
                console.log('Error in register submit');
            }
        });
    };

    render() {
        const { onRoutChange } = this.props;

        return (
            <div>
                <article className="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 black-80">
                        <form className="measure" onSubmit={this.regSubmit}>
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f4 fw6 ph0 mh0">Register</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                    <input
                                        onChange={this.regName}
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="Name"
                                        id="Name"
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                                    <input
                                        onChange={this.regEmail}
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="email"
                                        id="email"
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input
                                        onChange={this.regPass}
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="password"
                                        name="password"
                                        id="password"
                                    />
                                </div>
                            </fieldset>
                            <div>
                                <input
                                    onClick={() => onRoutChange('signin')}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="button"
                                    value="Sign in"
                                />
                                <input
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value="Submit"
                                />
                            </div>
                        </form>
                    </main>
                </article>
            </div>
        );
    }
}

export default Register;
