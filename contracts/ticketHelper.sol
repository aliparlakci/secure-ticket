pragma solidity >=0.5.0 <0.6.0;

import "./ticketFactory.sol";

contract TicketHelper is TicketFactory {
    function getTicketsByOwner(address _owner) external view returns(uint) {
        uint[] memory result = new uint[](ownerTicketCount[_owner]);   
        uint counter;

        for(uint i = 0; i < tickets.length; i++) {
            if (ticketToOwner[i] == _owner) {
                result[counter] = i;
                counter++;
            }
        }

        return result.length;
    }

    function getEventsLength() external view returns(uint) {
        return events.length;
    }
}