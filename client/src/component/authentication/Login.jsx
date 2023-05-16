import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../../features/authSlice";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showEmptyFieldMessage, setShowEmptyFieldMessage] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (user || isSuccess) {
            navigate("/agribrain");
        }
        dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
        e.preventDefault();
        if (email.trim() === "" || password.trim() === "") {
            setShowEmptyFieldMessage(true);
        } else {
            setShowEmptyFieldMessage(false);
            dispatch(LoginUser({ email, password }));
        }
    };

    return (
        <section className="hero is-fullheight is-fullwidth">
            <nav className="navbar is-fixed-top is-flex is-justify-content-center" style={{ backgroundColor: "#71AF9D" }}>
                <div className="navbar-brand">
                    <h1 className="navbar-item" style={{ color: "white",height:"15vh", fontSize: "50px", fontWeight: "900"}}>
                        AgriBrain
                    </h1>
                </div>
            </nav>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4">
                            <form onSubmit={Auth} className="box">
                                {isError && (
                                    <div className="modal is-active">
                                        <div className="modal-background"></div>
                                        <div className="modal-card" style={{width:"20vw"}}>
                                            <header className="modal-card-head" style={{backgroundColor:"#71AF9D"}}>
                                                <p className="modal-card-title" style={{color:"white", textAlign:"center",fontWeight:"bold"}}>Error</p>
                                                <button
                                                    className="delete"
                                                    aria-label="close"
                                                    onClick={() => dispatch(reset())}
                                                ></button>
                                            </header>
                                            <section className="modal-card-body is-flex is-justify-content-center" style={{ fontSize:"20px"}}>
                                                <p style={{margin:"2vh"}}>
                                                    {message}
                                                </p>
                                                <br/>

                                            </section>
                                            <footer className="modal-card-foot is-justify-content-end" style={{height:"2vh"}}>
                                                <button
                                                    className="button is-small"
                                                    onClick={() => dispatch(reset())}
                                                    style={{backgroundColor:"#71AF9D",color:"white",alignContent:"right"}}
                                                >
                                                    OK
                                                </button>
                                            </footer>
                                        </div>
                                    </div>
                                )}
                                <h1 className="title is-2 has-text-centered">Sign In</h1>
                                {showEmptyFieldMessage && (
                                    <p className="help is-danger" style={{fontSize:"15px"}} >Please fill in all fields.</p>
                                )}
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input
                                            type="password"
                                            className="input"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="******"
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button
                                        type="submit"
                                        className="button is-fullwidth"
                                        style={{backgroundColor:"#71AF9D",color:"white"}}
                                    >
                                        {isLoading ? "Loading..." : "Login"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
