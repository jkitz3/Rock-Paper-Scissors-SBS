import { Auth, Home } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>  
          <Route path="/*" Component={Auth} />
          <Route path="/home" Component={Home} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
