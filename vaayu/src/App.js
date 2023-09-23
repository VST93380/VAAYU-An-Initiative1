import './App.css';
import './login.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <ScrollToTop />
      <Home />
    </>
  );
}

export default App;