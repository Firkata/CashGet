import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={SignUp}/>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
