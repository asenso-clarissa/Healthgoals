
//import KetoStyled from './Components/Keto';
//import Header from './Components/Header';
//import VVRecipes from './Pages/KetoRecipes';
import Home from './Pages/Home';
//import SmoothieRecipe from './Pages/KetoRecipes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StyledNavbar from './Components/Navbar';
import RecipeButton from './Pages/RecipeButton';
//import KetoRecipes from './Pages/KetoRecipes';






const App = () => {

return (
<>
  <Router> 
  
    <Switch>
    

      <Route exact path="/"> <Home /> </Route>
      
      
      <Route path="/recipies"> <RecipeButton /> </ Route>
      
    
    </Switch> 
     <StyledNavbar />
    </Router>

      
      
      </>
       
  );
  
};

export default App;