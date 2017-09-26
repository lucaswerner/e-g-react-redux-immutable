import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducers from './reducers';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'normalize.css';
import 'flexboxgrid';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
    (
        <Provider store={store}>
            <div>
                <App />
            </div>
        </Provider>
    ),
    document.getElementById('root'));
registerServiceWorker();
