// import logo from "./logo.svg";
// import "./App.css";
import Index from "./component/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store, { rrfProps } from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <div>
          <Index />
        </div>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
} 

/* function App() {
  return (
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  );
}  */

export default App;
