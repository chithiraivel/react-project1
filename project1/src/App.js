import logo from './logo.svg';
import './App.css';
import Leftside from './Parent/Navbar/Leftside';
import Nav from './Parent/Navbar/Nav';
import Aside from './Parent/Navbar/Aside';
import Content from './Parent/Navbar/Content';
function App() {
  return (
    <div>
     <Leftside/>
     <Nav/>
     <Aside/>
     <Content/>
    </div>
  );
}

export default App;
