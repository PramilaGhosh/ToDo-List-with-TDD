import logo from './logo.svg';
import './App.css';
import TextAxios from './components/TestAxios/TestAxios';
function App() {
  return (
    <div className="App">
      <TextAxios url="https://drive.google.com/file/d/1dkdNjHiTvXmZTw6G1SYU0bPHHLqfJhq6/view" />
    </div>
  );
}

export default App;
