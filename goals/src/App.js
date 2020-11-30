import StyledNavbar from './Components/Navbar';
import KetoStyled from './Components/Keto';
import Header from './Components/Header';
import RecipeButtons from './Components/RecipeButton';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    
      <Header />
      <Router>
      <RecipeButtons/>
      </Router>

      <Router>
      <KetoStyled/>
      </Router>

      <Router>
      <StyledNavbar/>
      </Router>

    </div>
  );
}

export default App;



