import "./App.css";
import Lottery from "./Lottery";

function App() {
  return (
    <div className="App">
      <Lottery tittle={"Lottery 1"} />
      <Lottery tittle={"Lottery 2"} maxBalls={13} maxNums={10} />
    </div>
  );
}

export default App;
