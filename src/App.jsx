import './App.css';
import Navbar  from "./components/Navbar";

import Usestatebasics from './components/Usestatebasics';

import Usestatearray from './components/Usestatearray'

import Usestateobject from './components/Usestateobject';

import Usestateboolean from './components/Usestateboolean';
function App() {
  return (
    <>
      <Navbar />
      <Usestatebasics />
      <Usestatearray />
      <Usestateobject />
      <Usestateboolean />
    </>
  )
}
export default App