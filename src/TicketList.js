import React from "react";
import styles from "./TicketList.module.css";

const TicketList = ({ data }) => {
    return (
        <div>
            <table className="table">
                <tr className={styles.row}>
                    <td>No</td>
                    <td>Name</td>
                    <td>Date</td>
                    <td>Transfer Count</td>
                </tr>
                {data.map((ticket, index) => (
                    <tr>
                        <td className={styles.cell}>{index + 1}</td>
                        <td className={styles.cell}>{ticket.eventName}</td>
                        <td className={styles.cell}>{`${ticket.date.getDate()}/${ticket.date.getMonth() + 1
                            }/${ticket.date.getFullYear()}`}</td>
                        <td className={styles.cell}>{ticket.transferCount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default TicketList;
