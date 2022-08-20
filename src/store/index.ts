import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './AuthReducer/reducer';
import contactsReducer from './ContactsReducer/reducer';

const reducers = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
