import React from 'react';
import './App.scss';
import Show from './components/show/Show';

import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Show />
    </Router>
  );
}

export default App;
