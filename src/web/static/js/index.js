import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import AppContainer from './containers/AppContainer'
import reducer from './reducers/reducer'

const middleWare = [thunk]

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
	<AppContainer />
    </Provider>,
    document.getElementById('root')
)
