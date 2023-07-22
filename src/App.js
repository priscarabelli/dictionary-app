
import './App.css';
import Dictionary from "./Dictionary"; 

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
      <h1 className="heading-1">
        Dictionary by Pri
      </h1>
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer className="App-footer">Coded by Pri Scarabelli
      <div className='github-link'>
      <a href="https://github.com/priscarabelli/dictionary-app">Github repository</a>
      </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
