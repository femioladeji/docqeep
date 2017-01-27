import React, { Component } from 'react';
import {green600, red400} from 'material-ui/styles/colors';

class CreateDoc extends Component {
  constructor() {
    super();
    this.state = {};
    this.inputChange = this.inputChange.bind(this);
    this.createDocument = this.createDocument.bind(this);
    this.errorStyle = {
      color: red400
    };
    this.successStyle = {
      color: green600
    }
    this.displayMessage = this.displayMessage.bind(this);
  }

  inputChange(event, field) {
    const textValue = event.target.value;
    this.setState({[field]: textValue});
  }

  createDocument(event) {
    event.preventDefault();
    this.props.createDoc(this.state);
  }

  displayMessage() {
    if (this.props.doc.done) {
      return <span style={this.successStyle}>Document created successfully</span>;
    }
    return <span style={this.errorStyle}>{this.props.doc.message}</span>;
    
  }

  render() {
    return(
      <div class="row">
        <h3>Create Document</h3>
        <form className="col s12 m10 offset-m1 l6 offset-l3" onSubmit={this.createDocument}>
          <div class="input-field col s12">
            <input required onChange={(event) => this.inputChange(event, 'title')} id="title" type="text" />
            <label for="title">Title</label>
          </div>
          <div class="input-field col s12">
            <textarea id="content" required onChange={(event) => this.inputChange(event, 'content')} class="materialize-textarea"></textarea>
            <label for="content">Content</label>
          </div>
          <div class="input-field col s12">
            <select class="browser-default" onChange={(event) => this.inputChange(event, 'access')}>
              <option value="">Choose Access</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="role">Role</option>
            </select>
          </div>
          <span>{this.displayMessage()}</span><br/>
          <button class="btn waves-effect waves-light" type="submit" name="action">Create Document </button>
        </form>
      </div>
    );
  }
}

export default CreateDoc;