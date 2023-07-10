
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './Homepage/Homepage';
import { Show } from './Show/Show';
import { Create } from './Create/Create';
import { NotFound } from './NotFound/NotFound';
import { ErrorPage } from './ErrorPage/ErrorPage'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)

  async function fetchData(){
    try{
      const fetch = await axios.get('https://budgrt-back-end.onrender.com/transactions')
      setLoading(false)
      setData(fetch.data)
      let newTotal = 0
      for(const x of fetch.data){
        newTotal += Number(x.amount)
      }
      setTotal(newTotal)
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData()
  })

  if(loading){
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

  return (
    <div className="App">
      <main>
        <h1>Budget App</h1>
        <h2>Current balance: ${total.toLocaleString("en-US")}</h2>
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
