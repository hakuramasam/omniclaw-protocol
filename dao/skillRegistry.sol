pragma solidity ^0.8.20;

contract SkillRegistry {

struct Skill{
string name;
address creator;
}

Skill[] public skills;

function register(string memory name) public{

skills.push(
Skill(name,msg.sender)
);

}

}
