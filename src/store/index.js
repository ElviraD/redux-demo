import { createStore } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
const composeEnhancers = composeWithDevTools({trace: true})
const store = createStore(
  reducer,
  composeEnhancers()
);

// 第一种：普通用法
/* eslint-disable no-underscore-dangle */
// const store = createStore(
//   reducer, /* preloadedState, */
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//  );
/* eslint-enable */

// 第二种：store使用了中间件middleware和增强器enhaners
// import { createStore, applyMiddleware, compose } from 'redux';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   reducer, /* preloadedState, */ 
//   composeEnhancers(
//     applyMiddleware(...middleware)
//   )
// );
// 第四种：在生产环境中使用
// import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
// const store = createStore(
//   reducer, 
//   /* preloadedState, */
//   devToolsEnhancer(
//     // actionSanitizer, stateSanitizer等选项
//   )
// );
export default store;