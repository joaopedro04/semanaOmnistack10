import React, { useState,useEffect } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
      },
      (error) => {
          console.log(error);
      },
      {
          timeout: 30000,
      });
  }, []);
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input
            name="github_username"
            id="github_username"
            required
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
            name="techs"
            id="techs"
            required
            value={techs}
            onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
              type="number"
              name="latitude"
              id="latitude"
              required
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
              type="number"
              name="longitude"
              id="longitude"
              required
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
        </form>
        <button className="submit-form-button" type="submit">Salvar</button>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/50024295?v=4" alt="João Pedro" />
              <div className="user-info">
                <strong>João Pedro</strong>
                <span>React Native, ReactJS, Javascript</span>
              </div>
            </header>
            <p>asdadasd </p>
            <a href="https://www.google.com">Acessa perfil no git</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/50024295?v=4" alt="João Pedro" />
              <div className="user-info">
                <strong>João Pedro</strong>
                <span>React Native, ReactJS, Javascript</span>
              </div>
            </header>
            <p>sdsassad</p>
            <a href="https://www.google.com">Acessa perfil no git</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/50024295?v=4" alt="João Pedro" />
              <div className="user-info">
                <strong>João Pedro</strong>
                <span>React Native, ReactJS, Javascript</span>
              </div>
            </header>
            <p>sasdasdsd</p>
            <a href="https://www.google.com">Acessa perfil no git</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/50024295?v=4" alt="João Pedro" />
              <div className="user-info">
                <strong>João Pedro</strong>
                <span>React Native, ReactJS, Javascript</span>
              </div>
            </header>
            <p>sdadssad</p>
            <a href="https://www.google.com">Acessa perfil no git</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
