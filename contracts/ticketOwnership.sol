pragma solidity >=0.5.0 <0.6.0;

import "./ticketHelper.sol";
import "./erc721.sol";

contract TicketOwnership is ERC721, TicketHelper {
    uint256 transferLimit = 256;

    mapping(uint256 => address) ticketApprovals;

    function balanceOf(address _owner) external view returns (uint256) {
        return ownerTicketCount[_owner];
    }

    function ownerOf(uint256 _tokenId) external view returns (address) {
        return ticketToOwner[_tokenId];
    }

    function _transfer(
        address _from,
        address _to,
        uint256 _tokenId
    ) private isTransferrable(_tokenId) {
        ownerTicketCount[_to]++;
        ownerTicketCount[_from]--;
        ticketToOwner[_tokenId] = msg.sender;
        emit Transfer(_from, _to, _tokenId);
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _tokenId
    ) external payable {
        require(
            ticketToOwner[_tokenId] == msg.sender ||
                ticketApprovals[_tokenId] == msg.sender
        );
        _transfer(_from, _to, _tokenId);
    }

    function approve(address _approved, uint256 _tokenId) external payable {
        ticketApprovals[_tokenId] = _approved;
        emit Approval(msg.sender, _approved, _tokenId);
    }

    modifier isTransferrable(uint256 _ticketId) {
        require(tickets[_ticketId].transferCount <= transferLimit);
        _;
    }

    modifier onlyTicketOwner(uint256 _ticketId) {
        require(msg.sender == ticketToOwner[_ticketId]);
        _;
    }

    function setTransferLimit(uint256 _newLimit) public onlyOwner {
        transferLimit = _newLimit;
    }
}
