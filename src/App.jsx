import React from 'react'
import GlobalStyle from "./styles/globalStyles";
import Routes from "./routes/Routes";
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import { ContextProvider } from './context/MyContext';

const App = () => {
  return (
    <>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ContextProvider>
              <GlobalStyle />
              <Routes />
            </ContextProvider>
          </PersistGate>
        </Provider>
    </>
  )
}

export default App