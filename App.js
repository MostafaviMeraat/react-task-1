import './App.css';
import {useState} from 'react';
import Detail from './Detail';
import Card from './Card';

function App() {

  const [data,setData] = useState([])
  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  
  function onSubmit () {

    if (name === '' || age === '') {
      alert('Please fill each and every field(s)')
    }
    const esm = {name:name}
    setName(data.push(esm))
    const sen = {age:age}
    setAge(data.push(sen))
    setName("")
    setAge("")
    return data
  }

  return (

    <div className="App">

        <input placeholder='name' value={name} onChange={(e)=>{
          setName(e.target.value)
        }} 
        />
        <input placeholder='age' type="number" value={age} onChange={(e)=>{
          setAge(parseInt(e.target.value))

        }} />
        <input type="submit" value='Submit' onClick={onSubmit}/>

        <Card data={data}/>
        <Card data={data}/>
    </div>
    
  )
}

export default App;