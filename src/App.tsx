import React from 'react';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
