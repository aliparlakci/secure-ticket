import React, { useEffect, useState } from 'react';
import { useContract } from '../Providers/contractProvider';
import { useMetamask } from '../Providers/metamaskProvider';
import TicketList from '../components/TicketList';

function MyTicketsPage() {
    const {contract: secureTicket} = useContract()
    const account = useMetamask();

    const [tickets, setTickets] = useState([]);

    const getTickets = async () => {
        const ticketIds = await secureTicket.methods.getTicketsByOwner(account).call();

        const promises = []

        for (const ticketId of ticketIds) {
            promises.push(secureTicket.methods.getTicket(ticketId).call());
        }
        
        promises.forEach(async (promise) => {
            const [id, eventName, date, creator, price] = Object.values(await promise)
            setTickets(tickets => [...tickets, { id, eventName, date: new Date(date*1000), creator, price }]);
        })
    }

    useEffect(() => {
        if (secureTicket && account) {
            getTickets();
        } else {
        }
    }, [secureTicket, account])

    useEffect(() => {
        
    }, [])

    return (tickets && <TicketList data={tickets} />)
}

export default MyTicketsPage;