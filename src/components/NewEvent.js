import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useContract } from '../Providers/contractProvider';
import { useMetamask } from '../Providers/metamaskProvider';

const NewEvent = () => {

    const [loading, setLoading] = useState(false)

    const {contract: secureTicket, web3js} = useContract();
    const account = useMetamask();
    const history = useHistory();

    const handleSubmit = (event) => {

        event.preventDefault()

        setLoading(true)

        const name = event.target.name.value;
        const date = event.target.date.valueAsNumber / 1000;
        const price = event.target.price.value;
        secureTicket.methods.createEvent(name, date, web3js.utils.toWei(price, "ether")).send({from: account}).then(() => history.push("/events"))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label className="form-label">Event name</label> <input type="text" name="name" className="form-control" />
            </div>
            <label className="form-label">Date</label> <input type="date" name="date" className="form-control"/>
            <br />
            <label className="form-label">Price (in ether)</label> <input type="number" step="0.001" name="price" className="form-control" />
            <br />
            <input type="submit" value="Create" disabled={loading} className="btn btn-primary"/>
        </form>
    )
}

export default NewEvent;