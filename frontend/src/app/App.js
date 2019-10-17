import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadUser } from '../redux/ducks/auth/actions';
import '../assets/scss/main.scss';

// Componenets
import PrivateRoute from '../components/common/PrivateRoute';
import Register from '../components/authentication/Register';
import Login from '../components/authentication/Login';
import AuthLanding from '../components/auth-landing/AuthLanding';
import GuestLanding from '../components/guest-landing/GuestLanding';
import Search from '../components/auth-landing/Search';
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
            <PrivateRoute exact path="/home/" component={AuthLanding} />
            <PrivateRoute exact path="/search/" component={Search} />
            <Route exact path="/" component={GuestLanding} />
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
