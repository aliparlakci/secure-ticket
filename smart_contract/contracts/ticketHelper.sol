pragma solidity >=0.5.0 <0.6.0;

import "./ticketFactory.sol";

contract TicketHelper is TicketFactory {
    function getTicketsByOwner(address _owner) external view returns(uint[] memory) {
        uint[] memory result = new uint[](ownerTicketCount);   
        uint counter;

        for(uint i = 0; i < tickets.length; i++) {
            if (ticketToOwner[i] == _owner) {
                result[counter] = i;
                counter++;
            }
        }
    }
}