import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';



function App() {
  return (
    <div className="App">
        <NavBar/>
        <header className="App-header">
            <img src="https://picsum.photos/id/40/300" className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
