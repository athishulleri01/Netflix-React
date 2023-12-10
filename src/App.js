
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,trending,ComedyMovies,Documentaries,HorrorMovies,RomanceMovies} from './urls'


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Originals'/>
        <RowPost url={trending} title='Trending' isSmall/>
        <RowPost url={action} title='Action' isSmall/>
        <RowPost url={ComedyMovies} title='Comedy' isSmall/>
        <RowPost url={HorrorMovies} title='Horror' isSmall/>
        <RowPost url={RomanceMovies} title='Romance' isSmall/>
        <RowPost url={Documentaries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
