import React from 'react'
import './App.css'
import StartPage from './components/StartPage/StartPage'
import TestPage_Container from './components/TestPage/TestPage_Container'
import { Route, Switch, Redirect } from 'react-router-dom'
import FinalPage_Container from './components/FinalPage/FinalPage_Container'

const ErrorPage = () => {
  return <div>error</div>
};

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path={'/startPage'} component={StartPage} />
        <Route exact path={'/test'} component={TestPage_Container} />
        <Route exact path={'/finalPage'} component={FinalPage_Container} />
        <Route exact path='/' render={() => <Redirect to={'/startPage'} />}/>
        <Route path='*' component={ErrorPage}/>
      </Switch>
    </div>
  );
};

export default App;
