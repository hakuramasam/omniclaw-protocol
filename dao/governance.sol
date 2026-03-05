pragma solidity ^0.8.20;

contract OmniClawGovernance {
    mapping(address => bool) public voters;

    function voteUpgrade() public {
        voters[msg.sender] = true;
    }
}

