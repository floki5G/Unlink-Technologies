import "./App.css";
import InternalPages from "./routes";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
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
  );
}

export default App;
