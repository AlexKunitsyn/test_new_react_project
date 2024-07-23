// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './_helpers/store';  // Предполагается, что у вас есть файл store.js для Redux
import AppRoutes from './Routes';
import Navigation from './_components/Navigation';

const App = () => (
    <Provider store={store}>
      <Router>
        <Navigation test={'test!!!!!'} />
        <AppRoutes />
      </Router>
    </Provider>
);

export default App;
