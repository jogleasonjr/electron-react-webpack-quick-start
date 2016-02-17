// Need both React and ReactDOM for the JSX transpiler.
import ReactDOM from 'react-dom';
import React from 'react';

import Headline from './components/Headline';

ReactDOM.render(
  <Headline />,
  document.getElementById('react-root')
);