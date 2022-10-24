import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      userData: [],
    }
    this.fetchApi = this.fetchApi.bind(this);
  }

  async fetchApi() {
    const resp = await fetch('https://api.randomuser.me/');
    const jsonData = await resp.json();
    this.setState((previousState) => ({
      loading: false,
      userData: [...previousState.userData, ...jsonData.results],
    }))
  }

  componentDidMount() {
    this.fetchApi();
  }

  render() {
    const { userData, loading } = this.state;
    const personObj = userData[0];
    return (
      <div>
        <p>{ `Nome: ${personObj.name.first} ${personObj.name.last}` }</p>
        <p>{ `Genero: ${personObj.gender}` }</p>
        <p>{ `Endereço: ${personObj.location.street}` }</p>
      </div>
    );
  }
    
}

export default App;
