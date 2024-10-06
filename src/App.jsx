import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import Navbar from "./components/Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Navbar /> */}
    </>
  );
}

export default App;
