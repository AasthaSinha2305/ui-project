import logo from './logo.svg';
import './App.css';
import FetchApi from './components/FetchApi';
import Navbar from './components/NavBar';
import IntroPage from './components/IntroPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <IntroPage/>
        <FetchApi/>
      </header>
    </div>
  );
}

export default App;
