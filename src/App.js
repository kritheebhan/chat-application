import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;
