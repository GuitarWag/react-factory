import { Provider } from '@react-factory/react';
import React from 'react';

import { Navigation } from './navigation';
import { initStore } from './store';

function App(): React.ReactElement {
  return (
    <Provider createStore={initStore}>
      <Navigation />
    </Provider>
  );
}

export default App;
