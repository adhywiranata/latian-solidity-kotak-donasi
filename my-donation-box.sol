pragma solidity ^0.4.0;

contract MyDonationBox {
    address public contractOwner;
    address public lastDonatorAddress;
    uint public lastDonatedAmount;
    
    constructor() public {
        contractOwner = msg.sender;
    }
    
    function donate() public payable {
        lastDonatorAddress = msg.sender;
        lastDonatedAmount = msg.value;
    }

    function getDonationBalance() public view returns (uint) {
        return address(this).balance;
    }
}