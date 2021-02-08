pragma solidity >=0.5.0 <0.6.0;

import "./ownable.sol";

contract TicketFactory is Ownable {
    
    event NewEvent(uint eventId, string eventName, uint date);
    event NewTicket(uint ticketId, uint eventId, string eventName, uint32 date);
    
    struct Ticket {
        uint eventId;
        uint8 transferCount;
    }
    
    struct Event {
        string eventName;
        uint32 date;
    }
    
    Ticket[] public tickets;
    Event[] public events;
    
    mapping (uint => address) public ticketToOwner;
    mapping (uint => address) public eventToCreator;
    mapping (uint => uint) public eventTicketCount;
    mapping (address => uint) public ownerTicketCount;
    
    modifier eventExists(uint eventId) {
        require(events.length >= eventId, "Event does not exist!");
        _;
    }
    
    function createEvent(string memory _eventName, uint32 _date) public {
        uint id = events.push(Event(_eventName, _date)) - 1;
        eventToCreator[id] = msg.sender;
        emit NewEvent(id, _eventName, _date);
    }
    
    function createTicket(uint _eventId) public eventExists(_eventId) {
        uint id = tickets.push(Ticket(_eventId, 0)) - 1;
        ticketToOwner[id] = msg.sender; 
        ownerTicketCount[msg.sender]++;
        eventTicketCount[_eventId]++;
        emit NewTicket(id, _eventId, events[_eventId].eventName, events[_eventId].date);
    }
}