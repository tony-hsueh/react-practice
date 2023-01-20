import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';

import { Box } from '@chakra-ui/react'
import Navbar from './component/Navbar';
import Home from './page/Home';
import Login from './page/Login';
import NotFound from './page/NotFound';

function App() {
  return (
    <Box maxWidth={['100%', '540px', '720px', '960px']} mx="auto">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
