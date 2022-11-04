import './App.css'
import Carrousel from './pages/Carrousel';
import Header from './pages/Header';
import Productos from './pages/Productos'
const App = () => {
  return (
    <div className="App">
      <Header />
      <Carrousel />
      <Productos />
    </div>
  );
}

export default App;
