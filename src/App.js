import React from 'react';
import { Link, Route, Switch } from "react-router-dom";

import EventsPage from "./EventsPage";
import MyTicketsPage from "./MyTicketsPage";
import MarketplacePage from "./MarketplacePage";

import styles from "./App.module.css";
import NewEvent from './components/NewEvent';

function App() {

  return (
    <div className={styles.container}>
      <div className={styles.menu__container}>
        <div className={styles.link}>
          <Link to="/new_event">New Event</Link>

        </div>
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
          <Route path="/new_event">
            <NewEvent />
          </Route>
          <Route path="/tickets">
            <h2>My Tickets</h2>
            <MyTicketsPage />
          </Route>
          <Route path="/events">
            <h2>Events</h2>
            <EventsPage />
          </Route>
          <Route path="/market">
            <h2>Market</h2>
            <MarketplacePage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
