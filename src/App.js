import './App.css';

//Components
import Layout from './components/common/Layout'
import Home from './components/Home'
import StarshipPage from './components/StarshipPage'

// Router 
import {Route} from 'react-router-dom'



function App() {
  return (
    <div>
        <Layout>
          <Route path='/' exact component={Home} />
          <Route path='/starship-page' render={({location}) => 
              <StarshipPage location={location}/>
            }/>
        </Layout>
    </div>
  );
}

export default App;
