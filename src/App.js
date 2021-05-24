import './App.css';
import List from './List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Список Мейллистов</h1>
			<List />
		<button className="addList">Coздать</button>
      </header>
    </div>
  );
}

export default App;
