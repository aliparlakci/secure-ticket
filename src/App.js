import React from 'react';
import { Link, Redirect, Route, Switch } from "react-router-dom";

import EventsPage from "./EventsPage";
import MyTicketsPage from "./MyTicketsPage";
import MarketplacePage from "./MarketplacePage";
import TicketPage from './TicketPage';
import NewEvent from './NewEventPage';

import styles from "./App.module.css";

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
        {/* <div className={styles.link}>
          <Link to="/market">Market</Link>

        </div> */}
        <div className={styles.link}>
          <Link to="/tickets">My Tickets</Link>
        </div>
      </div>
      <div className={styles.contents}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/events" />
          </Route>
          <Route path="/new_event">
            <NewEvent />
          </Route>
          <Route path="/tickets">
            <h1>My Tickets</h1>
            <MyTicketsPage />
          </Route>
          <Route path="/events">
            <h1>Events</h1>
            <EventsPage />
          </Route>
          {/* <Route path="/market">
            <h1>Market</h1>
            <MarketplacePage />
          </Route> */}
          <Route path="/:ticketId?">
            <TicketPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
