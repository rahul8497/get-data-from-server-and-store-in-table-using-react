import React,{useState,useEffect} from 'react'

const App = () => {
  const[array,setArray]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
      response.json().then((data)=>{
        setArray(data);
      })
    })
  },[])
  return <>
  <table border='1'>
    <tbody>
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Username</td>
      </tr>
      {
        array.map((val,id)=>
          <tr key={id}>
            <td>{val.id}</td>
            <td>{val.name}</td>
            <td>{val.username}</td>
          </tr>
        )
      }
    </tbody>
  </table>
  </>
}

export default App;