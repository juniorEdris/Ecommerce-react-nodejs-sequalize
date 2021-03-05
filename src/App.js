import Header from './Header'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Home/Home';
import Shop from './Shop';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route  path='/shop' component={ Shop }/>
            <Route  path='/contact' component={ Contact }/>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;