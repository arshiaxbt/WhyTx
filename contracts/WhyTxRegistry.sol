// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title WhyTx Registry
/// @notice Anchors privacy-preserving record commitments to existing transactions.
/// @dev No readable context is ever stored by this contract.
contract WhyTxRegistry {
    struct Record {
        address creator;
        bytes32 transactionHash;
        bytes32 root;
        bytes32 previousId;
        uint64 createdAt;
    }

    mapping(bytes32 id => Record) public records;
    mapping(address creator => uint256) public nonces;

    event RecordSecured(
        bytes32 indexed id,
        address indexed creator,
        bytes32 indexed transactionHash,
        bytes32 root,
        bytes32 previousId,
        uint64 createdAt
    );

    error EmptyRoot();
    error UnknownPreviousRecord();
    error NotRecordOwner();

    function secureRecord(
        bytes32 transactionHash,
        bytes32 root,
        bytes32 previousId
    ) external returns (bytes32 id) {
        if (root == bytes32(0)) revert EmptyRoot();

        if (previousId != bytes32(0)) {
            Record storage previous = records[previousId];
            if (previous.creator == address(0)) revert UnknownPreviousRecord();
            if (previous.creator != msg.sender) revert NotRecordOwner();
            if (previous.transactionHash != transactionHash) revert UnknownPreviousRecord();
        }

        uint256 nonce = nonces[msg.sender]++;
        uint64 createdAt = uint64(block.timestamp);
        id = keccak256(abi.encode(msg.sender, transactionHash, root, previousId, nonce));
        records[id] = Record(msg.sender, transactionHash, root, previousId, createdAt);

        emit RecordSecured(id, msg.sender, transactionHash, root, previousId, createdAt);
    }
}
