import Get from './Get'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import Patch from './Patch'
import './App.css';
import Form from './Form'
import Delete from './Delete'
import Getall from './Getall'

function App() {
  return (
    <div>
      <div>
        <h1>Welcome to the Teacher Data</h1>
        <ul className='ul_id'>
          <li>
            <a href='/' >Add data</a>
          </li>
          <li>
            <a href='/id' >Seach by ID</a>
          </li>
          <li>
            <a href='/edit_id' >Edit Data</a>
          </li>
          <li>
            <a href='/Delete' >Delete Data</a>
          </li>
          <li>
            <a href='/getall' >Show all the Data</a>
          </li>
        </ul>
      </div>


      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/id" element={<Get />} />
          <Route path="/edit_id" element={<Patch />} />
          <Route path="/Delete" element={<Delete />} />
          <Route path="/getall" element={<Getall />} />
        </Routes>
      </Router>



    </div>
  );
}

export default App;
