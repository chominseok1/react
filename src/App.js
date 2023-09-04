import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./layout/Header";
import Home from "./layout/Home";
import FoodList from "./food/FoodList";
import FoodDetail from "./food/FoodDetail";
import Location from "./seoul/Location";
import Shop from "./seoul/Shop";
import Nature from "./seoul/Nature";

function App() {
  return (
    <Router>
      <Header/>
      <div className={"container"}>
        <Routes>
          <Route exact path={"/"} element={<Home/>}/>
          <Route  path={"/food/food_list/:cno"} element={<FoodList/>}/>
          <Route  path={"/food/food_detail/:fno"} element={<FoodDetail/>}/>
            <Route path={"/seoul/location"} element={<Location/>}/>
            <Route path={"/seoul/shop"} element={<Shop/>}/>
            <Route path={"/seoul/nature"} element={<Nature/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
