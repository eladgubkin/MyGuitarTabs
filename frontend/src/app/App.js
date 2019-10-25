import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import useComponentDidMount from '../hooks/useComponentDidMount';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../redux/ducks/authentication/actions';

// Style
import '../assets/scss/main.scss';

// Common components
import Loading from '../components/common/Loading';
import RouteWithLayout from '../components/common/RouteWithLayout';
import Layout from '../components/common/Layout';

// Guest components
import Landing from '../components/landing/Landing';
import Register from '../components/authentication/Register';
import Login from '../components/authentication/Login';

// Auth components
import Home from '../components/pages/Home';
import Search from '../components/pages/Search';
import Label from '../components/pages/Label.jsx';

const App = props => {
  const { isLoading } = props.auth;

  useComponentDidMount(() => props.loadUser());

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <Router>
        <Switch>
          <RouteWithLayout layout={Layout} path="/home/" component={Home} />
          <RouteWithLayout layout={Layout} path="/search/" component={Search} />
          <RouteWithLayout layout={Layout} path="/label/" component={Label} />

          <Route exac path="/register/" component={Register} />
          <Route exac path="/login/" component={Login} />
          <Route exac path="/" component={Landing} />
        </Switch>
      </Router>
    );
  }
};

App.propTypes = {
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loadUser }
)(App);
