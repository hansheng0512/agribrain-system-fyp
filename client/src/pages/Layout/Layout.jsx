import React from 'react';
import Navbar from "../../component/layout/Navbar";
import Sidebar from "../../component/layout/Sidebar";
import {useSelector} from "react-redux";
import {IoPerson} from 'react-icons/io5'

const Layout = ({children}) => {
    const {user} = useSelector((state) => state.auth);

    return (
        <React.Fragment>
            <Navbar/>
            <div className="columns mt-6" style={{minHeight:"90vh"}}>
                <div className="column is-2">
                    <Sidebar/>
                </div>
                <div className="column has-background-light">
                    <p style={{marginTop:"1vh",textAlign: "right",padding:"1vh",marginRight:"4vw"}}>
                        {user && user.user.user_fullname}
                        <IoPerson style={{marginLeft: "1vw"}}/>
                    </p>
                    <main>
                        <div style={{marginTop:"1vh",marginRight:"2vw",marginLeft:"2vw",marginBottom:"3vh",minHeight:"85vh",backgroundColor:"white",padding:"3vh"}}>
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Layout;
