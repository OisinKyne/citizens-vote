pragma solidity ^0.5.1;

contract NationalVote {
    event Vote(address from, bool inFavour, string billUri);

    function vote(string memory billUri, bool inFavour)  public {
        emit Vote(msg.sender, inFavour, billUri);
    }

}