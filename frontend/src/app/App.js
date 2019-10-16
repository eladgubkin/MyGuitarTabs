import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadUser } from '../redux/ducks/auth/actions';
import '../assets/scss/main.scss';

// Componenets
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import Landing from '../components/Landing';
import NotFoundPage from '../components/common/NotFoundPage';
import useComponentDidMount from '../hooks/useComponentDidMount';

const App = () => {
  useComponentDidMount(() => store.dispatch(loadUser()));

  const { isLoading } = store.getState().auth;

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register/" component={Register} />
            <Route exact path="/login/" component={Login} />
            <Route exact path="*" component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
};

export default App;
