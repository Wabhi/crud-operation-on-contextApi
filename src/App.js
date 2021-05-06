import './App.css';
import Context from "./Context"
import Home from "./Containers/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <h1>CRUD OPERATION ON CONTEXT API</h1>
      <h4>Using Class Component</h4>
      <Home/>
    </div>
  );
}

export default App;
