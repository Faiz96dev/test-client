import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './redux/reducers/Root.reducer';
import {Provider} from "react-redux";


export  const store = createStore(rootReducer,
    applyMiddleware(ReduxThunk),
)

let reranderTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById("root")
    );
};

reranderTree();
