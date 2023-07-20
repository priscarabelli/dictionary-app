
import './App.css';
import Dictionary from "./Dictionary"; 

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
      <h1 className='m-3 text-center'>
        Dictionary by Pri
      </h1>
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer className="App-footer">Coded by Pri Scarabelli</footer>
      </div>
    </div>
  );
}

export default App;
