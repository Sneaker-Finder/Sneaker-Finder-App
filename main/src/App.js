import './App.css';
import NavBar from './components/navbar';
import Bottompage from './components/bottompage';
import Middledesign from './components/middledesign';
function App() {
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  // );

  return (
    <div className="App">
        <NavBar name="Logo"/>
        <Middledesign />
        <Bottompage />
    </div>
  )
}

export default App;
