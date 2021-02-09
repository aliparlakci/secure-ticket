import React, { useState } from 'react';
import { useContract } from './contractProvider';
import { useMetamask } from './metamaskProvider';

const NewEvent = () => {

    const [name, setName] = useState()
    const [date, setDate] = useState()
    const [loading, setLoading] = useState(false)

    const secureTicket = useContract();
    const account = useMetamask()

    const handleSubmit = (event) => {

        setLoading(true)

        const name = event.target.name.value;
        const date = event.target.date.valueAsNumber / 1000;
        secureTicket.methods.createEvent(name, date).send({from: account}).then(setLoading(false))

        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            Event Name: <input type="text" name="name"/>
            <br />
            Date: <input type="date" name="date"/>
            <br />
            <input type="submit" value="Create" disabled={loading}/>
        </form>
    )
}

export default NewEvent;