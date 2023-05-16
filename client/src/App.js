import {BrowserRouter, Routes,Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./component/authentication/Login";
import User from "./pages/User/User";
import Crop from "./pages/PrecisionFarming/Crop/Crop"
import AddUser from "./pages/User/AddUser";
import EditUser from "./pages/User/EditUser";
import AddCrop from "./pages/PrecisionFarming/Crop/AddCrop";
import EditCrop from "./pages/PrecisionFarming/Crop/EditCrop";
import Agribrain from "./pages/Agribrain/Agribrain";
import SensorDashboard from "./pages/SensorMonitoring/SensorDashboard";
import SoilDashboard from "./pages/SensorMonitoring/SoilDashboard";
import SurroundingDashboard from "./pages/SensorMonitoring/SurroundingDashboard";
import ClimateDashboard from "./pages/ClimateCondition/ClimateDashboard";
import HistoricalDashboard from "./pages/ClimateCondition/HistoricalDashboard";
import ForecastDashboard from "./pages/ClimateCondition/ForecastDashboard";
import PrecisionFarming from "./component/precision/PrecisonFarming";
import PrecisionDashboard from "./pages/PrecisionFarming/PrecisionDashboard";
import ManagementCropDashboard from "./pages/PrecisionFarming/CropManagement/ManagementDashboard";
import FarmingRecordDashboard from "./pages/PrecisionFarming/FarmingRecord/FarmRecordDashboard";
function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                {/*Main Page*/}
                <Route path="/agribrain" element={<Agribrain/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/sensor-monitoring" element={<SensorDashboard/>} />
                <Route path="/climate-condition" element={<ClimateDashboard/>} />
                <Route path="/precision-farming" element={<PrecisionDashboard/>} />

                {/*Subpage - Sensor*/}
                <Route path="/sensor-monitoring/soil" element={<SoilDashboard/>} />
                <Route path="/sensor-monitoring/surrounding" element={<SurroundingDashboard/>} />

                {/*Subpage - Climate*/}
                <Route path="/precision-farming/crop-management" element={<ManagementCropDashboard/>} />
                <Route path="/precision-farming/farming-record" element={<FarmingRecordDashboard/>} />

                {/*Subpage - Precision Farming*/}
                <Route path="/preci-condition/historical" element={<HistoricalDashboard/>} />

                {/*Subpage - User*/}
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
