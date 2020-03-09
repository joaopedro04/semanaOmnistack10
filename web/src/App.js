import React, { useState,useEffect } from 'react';
import api from './services/api';
import DevForm from './components/devForm/DevForm';
import DevItem from './components/devItem/DevItem';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  const [devs, setDevs] = useState([]);
  
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/all-devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);
  async function handleAddDev(data) {
    const response = await api.post('/cad-dev', data);
    setDevs([...devs, response.data])
  }
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
        {devs.map(dev => (
          <DevItem key={dev._id} dev={dev}/>
        ))}
        </ul>
      </main>
    </div>
  );
}

export default App;