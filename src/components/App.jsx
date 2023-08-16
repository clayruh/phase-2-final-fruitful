import { Outlet } from 'react-router-dom'
import Header from './Header'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Outlet />
      </header>
    </div>
  );
}

export default App;
