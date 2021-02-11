pragma solidity >=0.5.0 <0.6.0;

import "./ownable.sol";

contract TicketFactory is Ownable {
    
    event NewEvent(uint eventId, string eventName, uint date, address creator, uint price);
    event NewTicket(uint ticketId, uint eventId, string eventName, uint32 date, address creator, uint price);
    
    struct Ticket {
        uint eventId;
        uint8 transferCount;
        uint price;
    }
    
    struct Event {
        string eventName;
        uint32 date;
        address creator;
        uint32 totalTickets;
        uint price;
    }
    
    Ticket[] public tickets;
    Event[] public events;
    
    mapping (uint => address) public ticketToOwner;
    mapping (uint => uint) public eventTicketCount;
    mapping (address => uint) public ownerTicketCount;
    
    modifier eventExists(uint _eventId) {
        require(events.length >= _eventId, "Event does not exist!");
        _;
    }

    modifier ticketExists(uint _ticketId) {
        require(tickets.length >= _ticketId, "Ticket does not exist!");
        _;
    }

    modifier eventOwner(uint _eventId) {
        require(events[_eventId].creator == msg.sender);
        _;
    }

    function getTicket(uint _ticketId) external view ticketExists(_ticketId) returns (uint256, string memory, uint32, address, uint, uint8) {
        Event memory event_ = events[tickets[_ticketId].eventId];
        return (_ticketId, event_.eventName, event_.date, event_.creator, event_.price, tickets[_ticketId].transferCount);
    }

    function getEvent(uint _eventId) external view eventExists(_eventId) returns (string memory, uint32, address, uint32) {
        return (events[_eventId].eventName, events[_eventId].date, events[_eventId].creator, events[_eventId].totalTickets);
    }
    
    function createEvent(string calldata _eventName, uint32 _date, uint _price) external {
        uint id = events.push(Event(_eventName, _date, msg.sender, 0, _price)) - 1;
        emit NewEvent(id, _eventName, _date, msg.sender, 0);
    }
    
    function createTicket(uint _eventId) external eventExists(_eventId) eventOwner(_eventId){
        uint id = tickets.push(Ticket(_eventId, 0, events[_eventId].price)) - 1;
        ticketToOwner[id] = msg.sender; 
        ownerTicketCount[msg.sender]++;
        events[_eventId].totalTickets++;
        emit NewTicket(id, _eventId, events[_eventId].eventName, events[_eventId].date, msg.sender, events[_eventId].price);
    }
}