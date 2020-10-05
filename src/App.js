import React from 'react';
import logo from './todoico.png'
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      i_agree: false,
      list: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({i_agree: !this.state.i_agree});}

  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem: ""
      })
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({list: updatedlist})
  }

updateInput(input){
  this.setState({newItem:input});
}

  render(){
    return(
      <div>
        <img src={logo} width="100" height="100" className="logo"/>
        <h1 className="app-title">todo app</h1>
        <div className="container">
          Add an Item....
          <br/>
          <input 
          type="text"
          className="input-text"
          placeholder="Write a todo"
          required
          value={this.state.newItem}
          onChange={e => this.updateInput(e.target.value)}
          />
          <button
          className="add-btn"
          onClick = {() => this.addItem(this.state.newItem)}
          disabled = {!this.state.newItem.length}
          >
            Add todo
          </button>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return(
                  <li key={item.id}>
                    <input
                    type="checkbox"
                    defaultChecked={this.state.i_agree}
                    onChange={this.handleChange}
                    />
                    {item.value}
                    <button
                    className="btn"
                    onClick={() => this.deleteItem(item.id)}>
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default App;