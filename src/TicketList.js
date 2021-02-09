import React, { useEffect, useState } from 'react';
import { useContract } from './contractProvider';
import { useMetamask } from './metamaskProvider';

const TicketList = () => {

    const secureTicket = useContract();
    const account = useMetamask();

    const [tickets, setTickets] = useState([]);

    const getTickets = async () => {
        const ticketIds = await secureTicket.methods.getTicketsByOwner(account).call();

        const newTickets = []
        ticketIds.forEach(async (ticketId, index) => {
            const ticket = await secureTicket.methods.tickets(ticketId).call()
            const {eventName, date} = await secureTicket.methods.events(ticket.eventId).call()

            newTickets.push({...ticket, eventName, date: new Date(date*1000) })
            //newTickets.push(ticket)
        })
        setTickets(newTickets)
    }

    useEffect(() => {
        if (secureTicket)
        {
            getTickets();
        }
    }, [])

    return <div>
        {JSON.stringify(tickets)}
        {tickets.map(({eventName, date}, index) => <div id={index}>
            <span>{eventName}</span>
            <span>{JSON.stringify(date)}</span>
        </div>)}
    </div>
}

export default TicketList;