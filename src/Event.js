import React from 'react';
import { useContract } from './contractProvider';
import { useMetamask } from './metamaskProvider';

const Event = ({ id, event: { creator, eventName, totalTickets } }) => {

    const secureTicket = useContract()
    const account = useMetamask();

    const createTicket = () => {
        secureTicket.methods.createTicket(id).send({ from: account })
            .on("receipt", () => console.log("Ticket created!"))
            .on("error", console.log)
    }

    return (<div>
        {creator.toLowerCase() === account.toLowerCase() && <button onClick={createTicket}>Create Ticket</button>}
        {id}{" "}{eventName}{" "}{totalTickets}
    </div>)
}

export default Event;