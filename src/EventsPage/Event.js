import React from 'react';
import { useContract } from '../Providers/contractProvider';
import { useMetamask } from '../Providers/metamaskProvider';

const Event = ({ id, event: { creator, eventName, totalTickets, price } }) => {

    const {contract: secureTicket, web3js} = useContract()
    const account = useMetamask();

    const createTicket = () => {
        secureTicket.methods.createTicket(id).send({ from: account })
            .on("receipt", () => console.log("Ticket created!"))
            .on("error", console.log)
    }

    const buyTicket = () => null;

    return (
        <tr key={id}>
            <td>
                {creator.toLowerCase() === account.toLowerCase() && (
                    <button onClick={createTicket} className="btn btn-link">
                        Create Ticket
                    </button>
                )}
                {creator.toLowerCase() !== account.toLowerCase() && (
                    <button onClick={buyTicket} className="btn btn-link">
                        Buy Ticket
                    </button>
                )}
            </td>
            <td>{eventName}</td>
            <td style={{textAlign: "center"}}>{web3js.utils.fromWei(price, "ether")} ether</td>
            <td style={{textAlign: "center"}}>{totalTickets}</td>
        </tr>
    )
}

export default Event;