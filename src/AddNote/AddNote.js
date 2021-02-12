import React, { Component } from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import './AddNote.css'
import conf from "../config";

export default class AddNote extends Component {
  static defaultProps = {
    folders: [],
  }

  state = {
   noteName: "",
   folderId:  "",
   content: ""
  }
  handleInput = (e) => {
    const{ name, value} = e.target;
    this.setState({
      [name]: value    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state)
    if(!this.state.folderId)
    {
      alert("Please select folder to add note to");
      return false;
    }
    const data = JSON.stringify(
      {
        note_name : this.state.noteName, 
        folder_id : this.state.folderId,
        content: this.state.content
      });
    fetch(conf.API_ENDPOINT+"/notes", {
      method: "POST",
      body: data,
      headers: {"Content-Type": "application/json"}
    })
    .then(response=>response.json())
    .then(response=>
      {
        if(response)
        {
          alert("Note Added!");
          window.location.replace("/");
        }
      })
    .catch(error=>console.log(error));
  }
  

  render() {
    const { folders } = this.props
    return (
      <section className='AddNote'>
        <h2>Create a note</h2>
        <NotefulForm handleSubmit={(e)=>this.handleSubmit(e)}>
          <div className='field'>
            <label htmlFor='note-name-input'>
              Name
            </label>
            <input required type='text' id='noteName' name='noteName' onChange={(e) => this.handleInput(e)} />
          </div>
          <div className='field'>
            <label htmlFor='note-content-input'>
              Content
            </label>
            <textarea required id='content' name="content" onChange={(e) => this.handleInput(e)} />
          </div>
          <div className='field'>
            <label htmlFor='note-folder-select'>
              Folder
            </label>
            <select required id='folderId' name='folderId' onChange={(e) => this.handleInput(e)}>
              <option>...</option>
              {folders.map(folder =>
                <option key={folder.id} value={folder.id}>
                  {folder.folder_name}
                </option>
              )}
            </select>
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add note
            </button>
          </div>
        </NotefulForm>
      </section>
    )
  }
}
