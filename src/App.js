import logo from './logo.svg';
import './App.css';
import Main from './component/Main';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
       <Router>
    
      <Routes>
         <Route path="/" element={<Main/>} />
        <Route path="/login1" element={<Login/>} />
        <Route path="/signup1" element={<Signup/>} />
         <Route path="/profile" element={<Profile/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
