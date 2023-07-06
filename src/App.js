
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './Homepage/Homepage';
import { Show } from './Show/Show';
import { Create } from './Create/Create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/show/:id' element={<Show/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
