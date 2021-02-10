import React, { useEffect, useState } from 'react';
import { useContract } from './contractProvider';
import { useMetamask } from './metamaskProvider';
import TicketList from './TicketList';

function MyTicketsList() {
    const secureTicket = useContract();
    const account = useMetamask();

    const [tickets, setTickets] = useState([]);

    const handleTickets = async (ticketId) => {
        const ticket = await secureTicket.methods.tickets(ticketId).call()
        const { eventName, date } = await secureTicket.methods.events(ticket.eventId).call()

        setTickets(tickets => [...tickets, { ...ticket, eventName, date: new Date(date * 1000) }])
    }

    const getTickets = async () => {
        const ticketIds = await secureTicket.methods.getTicketsByOwner(account).call();

        const newTickets = []
        ticketIds.forEach((ticketId) => {
            newTickets.push(handleTickets(ticketId))
        })

        console.log(newTickets)
        await Promise.all(newTickets)
    }

    useEffect(() => {
        if (secureTicket && account) {
            getTickets();
            console.log("yes")
        } else {
            console.log("nope")
        }
    }, [secureTicket, account])
    return (tickets && <TicketList data={tickets} />)
}

export default MyTicketsList;