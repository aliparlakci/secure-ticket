import { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { useContract } from "./contractProvider";
import EventsList from "./EventList";
import { useMetamask } from "./metamaskProvider";
import TicketList from "./TicketList";

import styles from "./App.module.css";
import MyTicketsList from "./MyTicketsList";
import MarketList from "./MarketList";

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
          <Link to="/market">Market</Link>

        </div>
        <div className={styles.link}>
          <Link to="/tickets">My Tickets</Link>

        </div>
      </div>
      <div className={styles.contents}>
        <Switch>
          <Route path="/tickets">
            <h2>My Tickets</h2>
            <MyTicketsList />
          </Route>
          <Route path="/events">
            <h2>Events</h2>
            <EventsList />
          </Route>
          <Route path="/market">
            <h2>Market</h2>
            <MarketList />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
