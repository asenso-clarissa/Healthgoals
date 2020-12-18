
//import KetoStyled from './Components/Keto';
//import Header from './Components/Header';
import KetoRecipe from './Pages/KetoRecipes';
import VVRecipes from './Pages/KetoRecipes';
import Home from './Pages/Home';
import SmoothieRecipe from './Pages/KetoRecipes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StyledNavbar from './Components/Navbar';
import RecipeButton from './Pages/RecipeButton';
import KetoRecipes from './Pages/KetoRecipes';






const App = () => {

return (
  <>
  <Router> 
    <div>
    <Switch>
    

      <Route exact path="/" component={Home} >
        <Home /> 
        </Route>
      <Route path="/smoothies" component={SmoothieRecipe} />
      <SmoothieRecipe />
      <Route path="/vvrecipe" component={VVRecipes} />
      <VVRecipes />
      <Route path="/keto" component={KetoRecipe} />
      <KetoRecipes/>
      <Route path="/recipes" component={RecipeButton} >
      <RecipeButton/>
      </Route>
    </Switch>
      <StyledNavbar />
      </div>
       </Router>
       </>
  );
  
};

export default App;