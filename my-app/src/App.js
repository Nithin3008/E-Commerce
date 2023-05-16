import "./App.css";
import {Routes,Route} from "react-router-dom"
import { Home1 } from "./Frontend/Home"
import {Login1} from "./Frontend/Login"
function App() {
  return (
    <div className="App">
      <Login1></Login1>
      <Routes>
        <Route path="Home1" element={<Home1></Home1>}></Route>
        <Route path="/Login1" element={<Login1 />}></Route>
      </Routes>

    </div>
  );
}

export default App;
