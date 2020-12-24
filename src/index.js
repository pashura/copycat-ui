import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Root from './containers/Root'
import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducers/reducers";
import {logger} from "redux-logger/src";
import rootSaga from "./sagas/sagas";
import 'bootstrap/dist/css/bootstrap.css';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

render(
    <Router>
        <Root store={store}/>
    </Router>,
    document.getElementById('root')
)
