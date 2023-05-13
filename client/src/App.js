import {BrowserRouter, Routes,Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard";
import Login from "./component/Login";
import User from "./pages/User/User";
import Crop from "./pages/Crop/Crop"
import AddUser from "./pages/User/AddUser";
import EditUser from "./pages/User/EditUser";
import AddCrop from "./pages/Crop/AddCrop";
import EditCrop from "./pages/Crop/EditCrop";
function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/user" element={<User/>} />
                <Route path="/user/add" element={<AddUser/>} />
                <Route path="/user/edit/:id" element={<EditUser/>} />
                <Route path="/crop" element={<Crop/>} />
                <Route path="/crop/add" element={<AddCrop/>} />
                <Route path="/crop/edit/:id" element={<EditCrop/>} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
