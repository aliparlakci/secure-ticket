import React from "react";
import { useContract } from "../Providers/contractProvider";
import styles from "./TicketList.module.css";

const TicketList = ({ data }) => {

    const { web3js } = useContract();

    return (
        <div>
            <table className="table">
                <thead>
                    <tr className={styles.row}>
                        <td>Name</td>
                        <td>Date</td>
                        <td style={{ textAlign: "center" }}>Price</td>
                        <td style={{ textAlign: "center" }}>Transfer Count</td>
                    </tr>
                </thead>
                {data.map((ticket, index) => (
                    <tr key={index}>
                        <td>{ticket.eventName}</td>
                        <td>{`${ticket.date.getDate()}/${ticket.date.getMonth() + 1
                            }/${ticket.date.getFullYear()}`}</td>
                        <td style={{ textAlign: "center" }}>{web3js && web3js.utils.fromWei(ticket.price || "0", "ether")} ether</td>
                        <td style={{ textAlign: "center" }}>{ticket.transferCount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default TicketList;
