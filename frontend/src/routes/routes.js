
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Painel from '../pages/painel';

export default function Routes() {
  return (
    <Router>
        <Switch>
            <Route exact path='/produtos/cadastrar' component={Painel} />
            <Route exact path='/produtos/listar' component={Painel} />
            <Route path='*'>
                <Redirect to='/produtos/listar' />
            </Route>
        </Switch>
    </Router>
  );
}