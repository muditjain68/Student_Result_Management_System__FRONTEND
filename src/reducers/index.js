import { combineReducers } from 'redux';

import auth from './auth';
import store from './store.js';

export const reducers = combineReducers({ auth,store });