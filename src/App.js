import { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import { useContract } from "./contractProvider";
import EventsList from "./EventList";
import { useMetamask } from "./metamaskProvider";
import TicketList from "./TicketList";

function App() {
  
  const account = useMetamask();
  const secureTicket = useContract();

  const createEvent = (contract) => {
    contract.methods.createEvent("Ajda Pekkan", 1612850449).send({ from: account }).then(console.log);
  }

  return (
    <div>
      <Link to="/events">Events</Link>{" "}
      <Link to="/tickets">My Tickets</Link>
      <Switch>
        <Route path="/tickets">
          <TicketList />
        </Route>
        <Route path="/events">
          <EventsList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
