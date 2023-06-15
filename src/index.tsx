import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './_root/App';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga"
import  rootSaga  from './redux/sagas/_root/Root.saga';
import ships from './redux/reducers/ship/Ship.reducer';
import items from './redux/reducers/item/Item.reducer';
const sagaMiddleware = createSagaMiddleware();
const middlewareList = [sagaMiddleware]
const store = configureStore({reducer: {items, ships}, middleware: middlewareList})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
sagaMiddleware.run(rootSaga)
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

