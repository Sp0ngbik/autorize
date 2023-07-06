import { Route, Routes } from "react-router-dom";
import Autorize from "../autorize/Autorize";
import Register from "../register/Register";
import WelcomePage from "../welcomePage/WelcomePage";

const InfoRoadMap = () => {
  return (
    <Routes>
      <Route path="/*" element={<WelcomePage />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/autorize" element={<Autorize />}></Route>
    </Routes>
  );
};

export default InfoRoadMap;
