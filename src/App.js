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
            value=""
          />

          <button type="" className="add-btn">Add Todo</button>

          <div className="list">
            <ul>
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