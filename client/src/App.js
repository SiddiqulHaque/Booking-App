import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Hotels from "./Pages/Hotels/Hotels";
import Singlehotel from "./Pages/Singlehotel/Singlehotel";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/hotels" element={<Hotels/>}></Route>
        <Route path="/hotels/:id" element={<Singlehotel/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
