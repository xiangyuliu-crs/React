import logo from "./logo.svg";
import "./App.css";
import { CounterHookExample } from "./CounterHookExample";
import { CounterComponent } from "./CounterComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterHookExample />
        <CounterComponent />
      </header>
    </div>
  );
}

export default App;
