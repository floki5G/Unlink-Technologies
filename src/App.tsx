import "./App.css";
import InternalPages from "./routes";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/configure-store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer
          position={"bottom-center"}
          autoClose={3000}
          hideProgressBar={true}
          closeOnClick
          draggable={false}
        />
        <InternalPages />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
