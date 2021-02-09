import React, { createContext, useContext, useEffect, useState } from "react";
import Web3 from 'web3';

import contractAbi from './contract';

const contractContext = createContext();

function ContractProvider({ children }) {

    const secureTicketAddress = "0xffb78d0f349ac08d970e47ddbf9c034019fec97c";

    const [contract, setContract] = useState();

    useEffect(() => {
        if (typeof window.web3 !== 'undefined') {

            const web3js = new Web3(window.web3.currentProvider);

            setContract(new web3js.eth.Contract(contractAbi.abi, secureTicketAddress));
        }
    }, []);

    return <contractContext.Provider value={contract}>{children}</contractContext.Provider>;
}

const useContract = () => useContext(contractContext);

export { ContractProvider, useContract };
