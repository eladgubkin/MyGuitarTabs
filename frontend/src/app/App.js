import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadUser } from '../redux/ducks/auth/actions';
import '../assets/scss/main.scss';

// Componenets
// import Layout from '../components/layout/Layout';
// import Landing from '../components/landing/Landing';
import Register from '../components/accounts/Register';
import Login from '../components/accounts/Login';
// import PrivateRoute from '../components/common/PrivateRoute';
import Test from '../components/landing/Test';
import NotFound from '../components/common/NotFound';
import useComponentDidMount from '../hooks/useComponentDidMount';

const App = () => {
  useComponentDidMount(() => store.dispatch(loadUser()));

  if (store.getState().auth.isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Provider store={store}>
        <Router>
          {/* <Layout /> */}
          <Switch>
            {/* <Route exact path="/" component={Landing} />*/}
            <Route exact path="/" component={Test} />
            <Route exact path="/register/" component={Register} />
            <Route exact path="/login/" component={Login} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
};

export default App;
