import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      idade: 0,
      explic: '',
      checked: '',
      voto: '',
    }
  }

  textChange = ({ target  }) => {
    const valor = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target
    this.setState({
      [name]: valor,
    })
  }

  render() {
    return (
      <form>
        <h1>Formulário de teste</h1>
        <fieldset>
          <label htmlFor="name"> Nome:
            <input
              onChange={ this.textChange } 
              value={ this.state.nome } 
              name='nome' 
              type="text" 
              id='name' 
            />
          </label>
          <label htmlFor="age"> Idade:
            <input 
              onChange={ this.textChange }
              value={ this.state.idade } 
              name='idade' 
              type="number" 
              id='age' 
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="vote"> Em quem irá votar?
            <select
              onChange={ this.textChange } 
              value={ this.state.voto } 
              name="voto" 
              id="vote"
            >
              <option value="bolsonaro">Bolsonaro</option>
              <option value="lula">Lula</option>
              <option value="ciro">Ciro</option>
              <option value="nulo">Nulo</option>
            </select>
          </label>
          <textarea name="explic" value={ this.state.explic } onChange={ this.textChange }/>
          <p>{ this.state.explic }</p>
          <label htmlFor="check"> Concordo com o uso das informações
            <input
              onChange={ this.textChange } 
              value={ this.state.checked } 
              name='checked' 
              type="checkbox" 
              id='check' 
            />
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Form;
