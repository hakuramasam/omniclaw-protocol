pragma solidity ^0.8.20;

contract Treasury {

address public owner;

constructor(){

owner = msg.sender;

}

function withdraw() public{

require(msg.sender==owner);

payable(owner).transfer(
address(this).balance
);

}

}
