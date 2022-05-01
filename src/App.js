import { useState, useEffect } from 'react';
import Axios from 'axios'
import Form from './Components/Form'

function App() {
  const [details, setDetails]= useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/details')
    .then(res => res.json())
    .then(data => setDetails(data.total))
    console.log(details)
  })
  const addDetails = (detail) =>{
        Axios.post('http://localhost:5000/details',detail)
  }
  return (
    <div >
        <Form onAdd={addDetails}/>
    </div>
  );
}

export default App;
