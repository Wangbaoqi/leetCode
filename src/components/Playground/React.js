import React from 'react';
import Playground from './Playground';

function ReactPlayground({ ...delegated }) {
  return <Playground {...delegated} mode="react" />;
}

export default ReactPlayground;
