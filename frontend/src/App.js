import React, {useState} from 'react';
import './App.css';
import logo from './assets/logo.svg';


function App() {
    const [email, setEmail] = useState('')
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="container">
     <img src={logo} alt="Tarefas"/>
     <div className="content">
       <p>
         Crie <strong>Tarefas</strong>
       </p>
       <form onSubmit = {handleSubmit}>
         <label htmlFor="email"> E-mail *</label>
         <input type="email" id="email" placeholder="seu melhor email"/>

         <button className="btn" type="submit">entrar</button>
       </form>
     </div>
   </div>
  );
}

export default App;
