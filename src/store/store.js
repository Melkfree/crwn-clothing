import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';

import { loggerMiddleware } from './middleware/logger';

// import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';

import { rootSaga } from './root-saga';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && loggerMiddleware, sagaMiddleware].filter(Boolean);

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnchancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnchancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);