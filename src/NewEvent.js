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
            <div className="mb-3">
            <label className="form-labe">Event name</label> <input type="text" name="name" className="form-control" />
            </div>
            <label className="form-labe">Date</label> <input type="date" name="date" className="form-control"/>
            <br />
            <input type="submit" value="Create" disabled={loading} className="btn btn-primary"/>
        </form>
    )
}

export default NewEvent;