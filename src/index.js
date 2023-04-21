import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import "./assets/sass/style.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from './redux/store'
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

const persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}
			>
					<App />
			</PersistGate>
		</Provider>
	</BrowserRouter>,
)
