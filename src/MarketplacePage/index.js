import React, { useEffect, useState } from 'react';
import { useContract } from '../Providers/contractProvider';
import { useMetamask } from '../Providers/metamaskProvider';
import TicketList from '../components/TicketList';

function MarketplacePage() {
    const {contract: secureTicket} = useContract()
    const account = useMetamask();

    const [tickets, setTickets] = useState([]);

    const getTickets = async () => {
        const length = await secureTicket.methods.getTicketsLength().call();

        const promises = []
        
        for (let ticketId = 0; ticketId < length; ticketId++) {
            promises.push(secureTicket.methods.getTicket(ticketId).call());
        }
            
        promises.forEach(async (promise) => {
            const [id, eventName, date, creator, price, transferCount] = Object.values(await promise)
            setTickets(tickets => [...tickets, { id, eventName, date: new Date(date*1000), creator, price, transferCount }]);
        })
    }

    useEffect(() => {
        if (secureTicket && account) {
            getTickets();
        } else {
        }
    }, [secureTicket, account])

    useEffect(() => {
        secureTicket.events.NewTicket().on("data", async ({ returnValues: { eventId, eventName, creator, ticketId, price, date } }) => {
            const newTicket = { eventId, eventName, creator, ticketId, price, date };
            setTickets(tickets => tickets.map((event, index) => index == eventId ? newTicket : event))
        })
    }, [])

    return (tickets && <TicketList data={tickets} />)
}

export default MarketplacePage;