
import './App.css';
import Button from '@mui/material/Button';
import BuyPage from './Pages/BuyPage';
// Updated upstream
import {useHistory} from "react-router-dom"

import { Link } from "react-router-dom/cjs/react-router-dom.min";


//Stashed changes
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ButonsMain from './butonsMain';
import { Typography } from '@mui/material';


function App() {
 

  return (
    <div className="App">

     <Typography variant='h1'>My Portfolio</Typography>
    <Router>
     
    

        <div className="middleBox">
         
      
            <Switch>
              <Route exact path="/">
               <ButonsMain/>
              
              </Route>
              <Route path="/buy">
                <BuyPage/>
              </Route>

            </Switch>         
        </div>

   
    </Router>
    </div>
   
//Updated upstream

 
// Stashed changes

  );
}

export default App;
