import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from "./components/Counter";
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
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
      {/* <Message/> */}
      <Message messagecode ="10"  messagecontent = "This is a message"/>
      <Counter></Counter>
      <FunctionEvent/>
      <ClassEvent/>
    </div>
  );
}

export default App;
