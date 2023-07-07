
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './Homepage/Homepage';
import { Show } from './Show/Show';
import { Create } from './Create/Create';
import { NotFound } from './NotFound/NotFound';
import { ErrorPage } from './ErrorPage/ErrorPage'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <main>
        <h1>Budget App</h1>
        <button onClick={() => navigate('/create')}>NEW TRANSACTION</button>
      </main>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/show/:id' element={<Show/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/notfound' element={<NotFound/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
