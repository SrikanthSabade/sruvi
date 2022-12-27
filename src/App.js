import logo from './logo.svg';
import './App.css';
import {Routes ,Route} from "react-router-dom"
import Dashboard from './Pages/Dashboard';
import Rempty from './Pages/Rempty';

function App() {
  return (
    <Routes>
    <Route exact path='/' element={<Dashboard/>}/>
    <Route exact path='/dashboard' element={<Dashboard/>}/>
    <Route exact path='*' element={<Rempty/>}/>
    </Routes>
  );
}

export default App;
