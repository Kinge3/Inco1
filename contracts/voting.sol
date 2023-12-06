// SPDX-License-Identifier: BSD-3-Clause-Clear

pragma solidity 0.8.19;

import "fhevm/lib/TFHE.sol";
import "fhevm/abstracts/EIP712WithModifier.sol";

contract Voting is EIP712WithModifier {
    // A mapping from address to an encrypted choice.
    struct EncryptedVote {
        euint8 encryptedChoice;
        bool initialized;
    }

    mapping(address => EncryptedVote) internal encryptedVotes;
    mapping(address => bool) internal hasVoted;
    euint8 public democratCountEncrypted;
    euint8 public republicanCountEncrypted;
    address public owner;
    uint8 public democratCount;
    uint8 public republicanCount;

    constructor() EIP712WithModifier("Authorization token", "1") {
        democratCountEncrypted = TFHE.asEuint8(0);
        republicanCountEncrypted = TFHE.asEuint8(0);
        democratCount = 0;
        republicanCount = 0;
        owner = msg.sender;
    }

    modifier OnlyOwner {
        require(msg.sender == owner, "Only Owner");
        _;
    }

    // encryptedChoice can be 0 (republican) or 1 (democrat)
    function castVote(bytes calldata encryptedChoice) public {
        require(!encryptedVotes[msg.sender].initialized, "Already voted");

        // Store the encrypted choice in the mapping
        encryptedVotes[msg.sender] = EncryptedVote(TFHE.asEuint8(encryptedChoice), true);

        ebool choice = TFHE.eq(TFHE.asEuint8(1), TFHE.asEuint8(encryptedChoice));
        euint8 democratCountToCast = TFHE.cmux(choice, TFHE.asEuint8(1), TFHE.asEuint8(0));
        euint8 republicanCountToCast = TFHE.cmux(choice, TFHE.asEuint8(0), TFHE.asEuint8(1));
        democratCountEncrypted = TFHE.add(democratCountEncrypted, democratCountToCast);
        republicanCountEncrypted = TFHE.add(republicanCountEncrypted, republicanCountToCast);
    }

    function revealResult() public OnlyOwner {
        democratCount = TFHE.decrypt(democratCountEncrypted);
        republicanCount = TFHE.decrypt(republicanCountEncrypted);
    }
}
