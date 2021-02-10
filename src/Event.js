import React from 'react';
import { useContract } from './contractProvider';
import { useMetamask } from './metamaskProvider';

const Event = ({ id, event: { creator, eventName, totalTickets } }) => {

    const secureTicket = useContract()
    const account = useMetamask();

    const createTicket = () => {
        console.log(id)
        secureTicket.methods.createTicket(id).send({ from: account })
            .on("receipt", () => console.log("Ticket created!"))
            .on("error", console.log)
    }

    return (
        <tr><td>{creator.toLowerCase() === account.toLowerCase() && <button onClick={createTicket} className="btn btn-link">Create Ticket</button>}</td><td>{eventName}</td><td>{totalTickets}</td></tr>
    )
}

export default Event;