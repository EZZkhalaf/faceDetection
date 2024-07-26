import React from "react";

const Register = (onRoutChange) =>{
    return(
        <div>
            <article className="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" >
            <main className="pa4 black-80">
                <form className="measure ">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend 
                    className="f4 fw6 ph0 mh0">
                        Register
                    </legend>
                    <div className="mt3">
                    <label 
                        className="db fw6 lh-copy f6" 
                        htmlFor="name">
                             Name
                    </label>
                    <input 
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        name="Name" 
                        id="Name" 
                    />
                    </div>
                    <div className="mv3">
                    <label 
                        className="db fw6 lh-copy f6" 
                        htmlFor="password">
                            Password
                    </label>
                    <input 
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="password" 
                        name="password" 
                        id="password" 
                    />
                    </div>

                </fieldset>
                <div>
                <input 
                    onClick={() => onRoutChange('home')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Sign in" 
                    />
                    <input 
                    onClick={() => onRoutChange('home')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Sign in" 
                    />
                </div>
                
                </form>
            </main>
            </article>
        </div>
    )
}
export default Register;