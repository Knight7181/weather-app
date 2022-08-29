import './App.css';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <div className="App-Container">
        <div className="App-header">
          <h2>Weather App</h2>
        </div>
        <Weather />
      </div>
    </div>
  );
}

export default App;
