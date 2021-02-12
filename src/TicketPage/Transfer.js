import React from "react";
import { useHistory } from "react-router-dom";
import { useContract } from "../Providers/contractProvider";
import { useMetamask } from "../Providers/metamaskProvider";

function Transfer({id}) {
  const { contract } = useContract();
  const account = useMetamask();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure?")) {
        contract.methods.TransferTicket(id, event.target.address.value).send({from: account}).then(() => history.push("/events"))
    }
  };

  return (
    <div>
      <hr />
      <form
        style={{ display: "flex", flexDirection: "row", alignItems: "end" }}
        onSubmit={handleSubmit}
      >
        <div>
          <label className="form-label">Transfer to</label>
          <input
            className="form-control"
            type="text"
            name="address"
            placeholder="Reciever address"
          />
        </div>
        <input
          className="btn btn-primary"
          type="submit"
          style={{ maxHeight: "38px", marginLeft: "1em" }}
          value="Send Ticket"
        />
      </form>
    </div>
  );
}

export default Transfer;
