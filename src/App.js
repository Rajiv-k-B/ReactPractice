import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Message from './components/Message'
import FunctionalCounter  from './components/FunctionalCounter';
import ConditionalComponent from './components/ConditionalComponent';
import CondCompOutput from './components/CondCompOutput';
import TernaryCondition from './components/TernaryCondition';
import Product from './components/Product';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my first React Project. You are doing great go ahead!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Hello/>
      <Message/>
      <FunctionalCounter/>
      <ConditionalComponent/>
      <CondCompOutput/>
      <TernaryCondition/>
      <Product/>
    </div>
  );
}

export default App;
