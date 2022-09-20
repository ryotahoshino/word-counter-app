import './App.css';
import Counter from "./components/Counter"

function App() {
  return (
    <div style={{padding: "50px" }}>
      <h1 style={{marginBottom: "20px"}}>カウンターアプリ</h1>
      <Counter />
    </div>
  );
}

export default App;