
import './App.css';
import Dictionary from "./Dictionary"; 
import Header from "./Header"; 

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
     <Header/>
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
