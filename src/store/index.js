import { createStore } from 'redux';
import reducer from './modules/rootReducer';

const store = createStore(reducer);


export default store;