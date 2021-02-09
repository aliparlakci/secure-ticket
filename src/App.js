import { useEffect, useState } from "react";
import "./App.css";
import { useContract } from "./contractProvider";
import MetamaskProvider, { useMetamask } from "./metamaskProvider";

function App() {
  const [tickets, setTickets] = useState([]);
  const [events, setEvents] = useState([]);
  const account = useMetamask();
  const secureTicket = useContract();

  const createEvent = (contract) => {
    contract.methods.createEvent("Ajda Pekkan", 1612850449).send({ from: account }).then(console.log);
  }

  const getEvents = async (contract) => {
    const length = await contract.methods.getEventsLength().call();
    console.log(length);

    const newEvents = []
    for (let i = 0; i < length; i++) {
      const event = await contract.methods.events(i).call();
      newEvents.push(event);
    }

    setEvents(newEvents);
  }
  
  useEffect(() => {
    if (secureTicket) {
      getEvents(secureTicket);
    }
  }, [secureTicket])

  return (
    <div>
      {account}
      <button onClick={() => createEvent(secureTicket)}>CreateEvent</button>
    </div>
  );
}

export default App;
