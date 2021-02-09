import React, { createContext, useContext, useEffect, useState } from "react";
import Web3 from 'web3';

import ABI from './abis/SecureTicket.json';

const contractContext = createContext();

function ContractProvider({ children }) {

    const secureTicketAddress = ABI.networks["5777"].address;

    const [contract, setContract] = useState();

    useEffect(() => {
        if (typeof window.web3 !== 'undefined') {

            const web3js = new Web3(window.web3.currentProvider);

            setContract(new web3js.eth.Contract(ABI.abi, secureTicketAddress));
        }
    }, []);

    return <contractContext.Provider value={contract}>{children}</contractContext.Provider>;
}

const useContract = () => useContext(contractContext);

export { ContractProvider, useContract };
