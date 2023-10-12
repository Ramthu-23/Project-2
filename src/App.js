import { Link, Route ,Routes} from 'react-router-dom';
// import './App.css';
// import {Content} from './Content';
import Home from './Home';
import About from './About';
function App() {
  return (
    <>
    <Link  to={"/about"}>About </Link><br></br>
    <Link  to={"/"}>Home </Link>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;