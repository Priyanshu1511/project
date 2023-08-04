
//import { AppContext } from './contextAPI';
import Movies from './Movies';
import Search from './Search';
import "./App.css"
const Home = () => {
  //const name = useContext(AppContext);
  
  return (
    <>
    <Search/>
    <Movies/>
    
    </>
  );
}

export default Home