import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App/App';
import Movie from './components/Movie/Movie';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

  const Main = () => (
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/movie/:movieId' component={Movie} name='movie'/>
      </Switch>
  )
ReactDOM.render((
    <BrowserRouter>
     <Main />
    </BrowserRouter>
    ) , document.getElementById('root'));
registerServiceWorker();
