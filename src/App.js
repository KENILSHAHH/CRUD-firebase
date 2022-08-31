
import  CustomizedAccordions from './p.js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  withRouter,
} from "react-router-dom";
import Card from './Card.js';
import Navbar from './Navbar.js';
import Science from './Science.js';
import English from './English.js';
import Maths from './Maths.js';
// import { } from './Accordion';

function App() {
  return (
    <Router> <div className="App">
      <Navbar/>
     
        <Routes>
        <Route exact path="/acc" key={CustomizedAccordions} element={CustomizedAccordions}/>
        <Route exact path="/" key={Card} element={<Card/>}/>
        <Route exact path="/Maths.js" key={Maths} element={<Maths/>}/>
        {/* <Route exact path="/English.js" key={English} element={<English/>}/>
        <Route exact path="/Science.js" key={Science} element={<Science/>}/> */}
          
        </Routes>
      
      
    </div>
    </Router>
  );
}

export default App;
