import { Router } from "./router";
import "normalize.css";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./react-query/instance";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Router></Router>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
