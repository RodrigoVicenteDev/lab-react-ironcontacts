import contacts from './contacts.json'
import { useState } from 'react';
import './App.css';

function App() {
  
  
  const [cinco, setCinco] = useState(contacts.slice(0,5))
  const [resto, setResto] = useState(contacts.slice(6))
  const [contatos, setContacts] = useState(cinco)
  const [update, setUpdate] = useState(true)

function handeDelete(id){
   {
    let filtedPost = contatos.filter((element) => {
      return element.id !== id;
    });

    setContacts(filtedPost);
  }
}  
  


function handleCLick(){
 let index = (Math.floor(Math.random() * (resto.length - 0 + 1)) + 0)
 setContacts([...contatos,resto[index]])
 
}
function handlepop(){
  contatos.sort((a,b)=>{
    return b.popularity - a.popularity
  });
  setUpdate(!update)                                          }

  function handleName(){
    contatos.sort((a,b)=>{
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      
      return 0;
    });
    setUpdate(!update)
    
    console.log(contatos)
  }
  return (
    <div className="App">
      <button onClick={handleCLick}>Incluir</button>
      <button onClick={handleName}>Ordenar por nome</button>
      <button onClick={handlepop}>Ordenar por Popularidade</button>
      <table style={{margin:'20px'}}>
      <thead>
        <tr>
          <th style={{padding:'20px'}}>Picture</th>
          <th style={{padding:'20px'}}>Name</th>
          <th style={{padding:'20px'}}>popularity</th>
          <th style={{padding:'20px'}}>wonOscar</th>
          <th style={{padding:'20px'}}>wonEmmy</th>
        </tr>
      </thead>
        <tbody>
       {contatos.map((element)=>{
        return (
          <tr>
            <td style={{padding:'20px'}}><img style={{width:'50px'}} src={element.pictureUrl} alt=".."/></td>
            <td style={{padding:'20px'}}><p>{element.name}</p></td>
            <td style={{padding:'20px'}}><p>{element.popularity} </p></td>
            <td style={{padding:'20px'}}>{element.wonOscar? '🏆' :''}</td>
            <td style={{padding:'20px'}}>{element.wonEmmy? '🏆' :''}</td>
            <td style={{padding:'20px'}} ><button onClick={() => handeDelete(element.id)}>Excluir</button></td>
          </tr>
        )
       })}
      
      
        </tbody>
      </table>
     
    </div>
  );
}

export default App;
