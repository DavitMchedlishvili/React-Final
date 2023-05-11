import "./App.css";
import { Link, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </Router>

      <Routes>
        <Router path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  return <h1>home</h1>;
};

export default App;
