import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Nopage from './pages/Nopage';
import Nav from './components/Nav';
import Blogs from './pages/Blogs';
function App() {
  return (
    <BrowserRouter>
        
        <Routes>
        
            <Route path='/'       element={<Home/>}></Route>
            <Route path='/signin' element={<Signin />}></Route>
            <Route path='/signup' element={<Signup/>} ></Route>
            <Route path='/blogs'   element={<Blogs/>}></Route>
            <Route path='*'       element={<Nopage/>} ></Route>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
