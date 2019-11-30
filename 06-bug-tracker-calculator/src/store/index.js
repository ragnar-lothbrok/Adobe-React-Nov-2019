import bugsReducer from '../bugTracker/reducers';
import spinnerReducer from '../spinner/reducers';

import { createStore, combineReducers } from 'redux';
import calcualtorReducer from '../calculator/reducers';

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    spinnerState : spinnerReducer,
    calculatorState: calcualtorReducer
});

const appStore = createStore(rootReducer);

window['appStore'] = appStore;
export default appStore;
