import React, { useEffect, useState } from 'react';
import { useContract } from '../Providers/contractProvider';
import Event from './Event';

const EventsPage = () => {
    const {contract: secureTicket} = useContract()

    const [events, setEvents] = useState([]);

    const getEvents = async (contract) => {
        const length = await contract.methods.getEventsLength().call();

        const newEvents = []
        for (let i = 0; i < length; i++) {
            const event = await contract.methods.events(i).call();
            newEvents.push(event);
        }

        setEvents(newEvents);
    }

    useEffect(() => {
        if (secureTicket) {
            getEvents(secureTicket);
        }
    }, [])

    useEffect(() => {
        secureTicket.events.NewTicket().on("data", async ({ returnValues: { eventId } }) => {

            const newEvent = await secureTicket.methods.events(eventId).call();
            setEvents(events => events.map((event, index) => index == eventId ? newEvent : event))
        })
    }, [])


    useEffect(() => {
        secureTicket.events.NewEvent().on("data", async ({ returnValues: { eventId, eventName, date, creator, price } }) => {
            setEvents(events => [...events, { eventId, eventName, date, creator, totalTickets: 0, price }])
        })
    }, [])


    return (<>
        <table>
            <tr>
                <td></td>
                <td>Event Name</td>
                <td style={{textAlign: "center"}}>Price</td>
                <td style={{textAlign: "center"}}>Ticket Count</td>
            </tr>
            {events.map((event, index) =>
                <Event key={index} id={index} event={event} />)}
        </table>
    </>)
}

export default EventsPage;