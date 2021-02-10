import React, { useEffect, useState } from 'react';
import { useContract } from './contractProvider';
import { useMetamask } from './metamaskProvider';
import TicketList from './TicketList';

function MarketList() {
    const secureTicket = useContract();
    const account = useMetamask();

    const [tickets, setTickets] = useState([]);

    const handleTickets = async (ticket) => {
        const { eventName, date } = await secureTicket.methods.events(ticket.eventId).call()

        setTickets(tickets => [...tickets, { ...ticket, eventName, date: new Date(date * 1000) }])
    }

    const getTickets = async () => {
        const length = await secureTicket.methods.getTicketsLength().call();

        const ticketIds = []
        for (let i = 0; i < length; i++) {
            const ticket = await secureTicket.methods.tickets(i).call();
            ticketIds.push(ticket);
        }

        const newTickets = []
        console.log(ticketIds)
        ticketIds.forEach((ticketId) => {
            newTickets.push(handleTickets(ticketId))
        })

        await Promise.all(newTickets)
    }

    useEffect(() => {
        if (secureTicket && account) {
            getTickets();
        } else {
        }
    }, [secureTicket, account])
    return (tickets && <TicketList data={tickets} />)
}

export default MarketList;