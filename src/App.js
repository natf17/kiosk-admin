import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the kiosk admin</h1>
      <Link to={'events'}>Manage events</Link>
      <p>Manage event seasons</p>
    </div>
  );
}

export default App;
