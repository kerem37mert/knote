import Router from "./src/Router";

import { Provider } from "react-redux";
import store from "./src/store";

const App = () => {
  return(
    <Provider store={ store }>
      <Router />
    </Provider>
  );
}

export default App;