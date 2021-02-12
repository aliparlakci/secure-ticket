pragma solidity >=0.5.0 <0.6.0;

import "./ticketHelper.sol";
import "./erc721.sol";

contract TicketOwnership is ERC721, TicketHelper {

    function getTicketOwner(uint _ticketId) external view returns(address) {
        return ownerOf(_ticketId);
    }

    function TransferTicket(uint _ticketId, address _to) external {
        transferFrom(msg.sender, _to, _ticketId);
    }
}
