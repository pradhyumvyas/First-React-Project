import React from 'react';
import logo from './logo.svg';
import './App.css';


// function App(){
//   return (
//     <div className="App">
//       <h1> Pradhyum</h1>
//       <h2>Vyas</h2>

//       <header className="App-header">
//         <img src={logo} className="App-logo" />
//       <p>Learning React</p> 
//       </header>
//     </div>
//   );
// }

// export default App;

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={

      newItem:"",
      list:[]
    }
  }

  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value:todoValue,
        isDone:false
      };
      const list = [...this.state.list]
      list.push(newItem)

      this.setState({
        list,
        newItem:" "
      });
    }
  }

  deleteItem(id){
    const list=[...this.state.list];
    const updatedList = list.filter(item => item.id != id);
    this.setState({list:updatedList})
  }

  updateInput(input){
    this.setState({newItem:input})
  }

  render(){
    return(
      // <h1>Pradhyum Vyas</h1>
      <div>
        <img src={logo} width="100" height='100' className='logo' />

        <h1 className="app-title">My React ToDo App</h1>

        <div className="container">
          Add an Item.....
          <br/>
          <input 
            type="text" 
            className="input-text"
            placeholder="Write a Todo" 
            value={this.state.newItem}
            required
            onChange={e => this.updateInput(e.target.value)}
          />

          <button className="add-btn" onClick={() => this.addItem(this.state.newItem)} 
          disabled={!this.state.newItem.length}
          >Add Todo</button>

          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return(
                  <li key={item.id}>
                    <input type="checkbox" name="idDone" checked={item.isDone} onChange={() =>{}} 
                    value="" />
                  {item.value}
                  <button type="" 
                  className="btn"
                  onClick= {() => this.deleteItem(item.id)}
                  >Delete</button>

                  </li>
                )
              })}
              <li>
                <input type="checkbox" name="" value="" />
                Complete E-Commerce Project
                <button type="" className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }


}

export default App