import "./App.css";
import { useContract } from "./contractProvider";
import MetamaskProvider, { useMetamask } from "./metamaskProvider";

function App() {
  const account = useMetamask();
  const contract = useContract();

  const createEvent = () => {
    contract.methods.createEvent("Ajda Pekkan", 1612850449).send({ from: account }).then(console.log);
  }

  return (
    <div>
      {account}
      <button onClick={createEvent}>CreateEvent</button>
    </div>
  );
}

export default App;
