import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContract } from '../Providers/contractProvider';
import { useMetamask } from '../Providers/metamaskProvider';
import Transfer from './Transfer';

function TicketPage() {
    const [ticketDetails, setTicketDetails] = useState();
    const [ticketOwner, setTicketOwner] = useState();

    const { ticketId } = useParams();
    const { contract: secureTicket, web3js } = useContract();
    const account = useMetamask();

    const fetchTicket = async () => {
        const ticket = await secureTicket.methods.getTicket(ticketId).call();
        
        const [id, eventName, date, creator, price] = Object.values(ticket);
        setTicketDetails({ id, eventName, date: new Date(date * 1000), creator, price });
    }

    const fetchOwner = async () => {
        const owner = await secureTicket.methods.getTicketOwner(ticketId).call();
        setTicketOwner(owner.toLowerCase());
    }

    useEffect(() => {
        if (secureTicket) {
            fetchTicket();
            fetchOwner();
        } else {
        }
    }, [secureTicket])

    return <>
        {ticketDetails && <div><h1>{ticketDetails.eventName}</h1>
        <h5>{`${ticketDetails.date.getDate()}/${ticketDetails.date.getMonth() + 1
                }/${ticketDetails.date.getFullYear()}`} | {web3js && web3js.utils.fromWei(ticketDetails.price || "0", "ether")} ether</h5>
            {account === ticketOwner && <Transfer id={ticketId} />}
        </div>}</>
}

export default TicketPage;