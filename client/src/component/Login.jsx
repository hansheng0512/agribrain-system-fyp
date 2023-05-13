import React from 'react';
import logo from "../logo.png";

const Login = () => {
    return (
        <div>
            <section className="hero has-background-white is-fullheight is-fullwidth">
              <div className="hero-body">
                <div className="container">
                    <div className="columns is-center">
                        <div className="column is-4">
                            <form className="box">
                                <h1 className="title is-2">Sign In</h1>
                                <div className="field">
                                    <label className="label"> Email</label>
                                    <div className="control">
                                        <input type="text" className="input" placeholder='Email'/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label"> Password</label>
                                    <div className="control">
                                        <input type="password" className="input" placeholder='*******'/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className='button is-success is-fullwidth'>
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                        <img
                            src={logo}
                            width="80%"
                            // height=""
                            alt = "logo"
                        />
                    </div>
                </div>
              </div>
            </section>
        </div>
    );
};

export default Login;
