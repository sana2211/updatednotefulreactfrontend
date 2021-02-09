import React, { Component } from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import './AddFolder.css'
import conf from "../config";

export default class AddFolder extends Component {
  state = {
    name: ""
  }
  handleInput = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify(
      {
        folder_name: this.state.name
      });
    fetch(conf.API_ENDPOINT+"/folders", {
      method: "POST",
      body: data,
      headers: {"Content-Type": "application/json"}
    })
    .then(response=>response.json())
    .then(response=>
      {
        if(response)
        {
          alert("Folder created!")
        }
      })
    .catch(error=>console.log(error));
  }
  
  render() {
    return (
      <section className='AddFolder'>
        <h2>Create a folder</h2>
        <NotefulForm handleSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='folder-name-input'>
              Name
            </label>
            <input type='text' id='folder-name-input' onChange={(e) => this.handleInput(e)} />
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add folder
            </button>
          </div>
        </NotefulForm>
      </section>
    )
  }
}
