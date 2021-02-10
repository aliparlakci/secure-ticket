pragma solidity >=0.5.0 <0.6.0;
pragma experimental ABIEncoderV2;

import "./ticketFactory.sol";

contract TicketHelper is TicketFactory {
    function getTicketsByOwner(address _owner)
        external
        view
        returns (uint256[] memory)
    {
        uint256[] memory result = new uint256[](ownerTicketCount[_owner]);
        uint256 counter;

        for (uint256 i = 0; i < tickets.length; i++) {
            if (ticketToOwner[i] == _owner) {
                result[counter] = i;
                counter++;
            }
        }

        return result;
    }

    function getEventsLength() external view returns (uint256) {
        return events.length;
    }

    function getTicketsLength() external view returns (uint256) {
        return tickets.length;
    }
}
