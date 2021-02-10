import { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { useContract } from "./contractProvider";
import EventsList from "./EventList";
import { useMetamask } from "./metamaskProvider";
import TicketList from "./TicketList";

import styles from "./App.module.css";

function App() {

  const account = useMetamask();
  const secureTicket = useContract();

  const createEvent = (contract) => {
    contract.methods.createEvent("Ajda Pekkan", 1612850449).send({ from: account }).then(console.log);
  }

  return (
    <div className={styles.container}>
      <div className={styles.menu__container}>
        <div className={styles.link}>
          <Link to="/events">Events</Link>

        </div>
        <div className={styles.link}>
          <Link to="/tickets">My Tickets</Link>

        </div>
      </div>
      <Switch>
        <div className={styles.content}>
          <Route path="/tickets">
            <TicketList />
          </Route>
          <Route path="/events">
            <EventsList />
          </Route>
        </div>
      </Switch>
    </div>
  );
}

export default App;
