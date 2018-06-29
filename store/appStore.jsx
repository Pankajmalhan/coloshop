import {createStore, applyMiddleware,compose    } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';
import allReducers from '../reducers/reducers';

const loggerMiddleware = createLogger();
const store = createStore(
    allReducers,
    compose(
        applyMiddleware(thunk,promiseMiddleware),
        window.devToolsExtension ?window.devToolsExtension() : f=>f
    ),
);

module.exports=store;