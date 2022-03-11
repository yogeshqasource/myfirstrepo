import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MyRoutes from './MyRoutes';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div>
        <MyRoutes/>
        <Routes>
          <Route path="/about" element={'About'}/>
          <Route path="/users" element={'Users'}/>
          <Route path="/contact" element={'Contact'}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
