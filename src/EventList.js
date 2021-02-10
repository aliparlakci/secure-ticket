import React, { useEffect, useState } from 'react';
import { useContract } from './contractProvider';
import Event from './Event';
import NewEvent from './NewEvent';

const EventsList = () => {
    const secureTicket = useContract();

    const [events, setEvents] = useState([]);

    const getEvents = async (contract) => {
        const length = await contract.methods.getEventsLength().call();
        console.log(length);

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
    }, [secureTicket])

    useEffect(() => {
        secureTicket.events.NewTicket().on("data", async ({ returnValues: { eventId } }) => {

            const newEvent = await secureTicket.methods.events(eventId).call();
            setEvents(events => events.map((event, index) => index == eventId ? newEvent : event))
        })
    }, [])


    useEffect(() => {
        secureTicket.events.NewEvent().on("data", async ({ returnValues: { eventId, eventName, date, creator } }) => {
            setEvents(events => [...events, { eventId, eventName, date, creator, totalTickets: 0 }])
        })
    }, [])


    return (<><NewEvent />
        {events.map((event, index) =>
            <ul className="list-group">

                <Event id={index} event={event} />
            </ul>)}
    </>)
}

export default EventsList;