---
id: validating
title: Validating
---
The process of creating new [blocks](./block.md)) is called validating. The validating [account](../built-in-features/account.md) - called the validator - gets the fees for the [transactions](./transaction.md) in the block. This gives the validator an incentive to add as many transactions to the block as possible.

The account importance determines the chances to create a new block. The importance is calculated as the relation between the number of validating mosaics the account owns and the total supply. To have importance greater than zero, the account needs to hold a minimum amount this mosaics.

Sirius-Chain software allows defining any [mosaic](../built-in-features/mosaic.md) for validating, using its configurable properties to fit the business needs. For example, consortium networks can distribute validating mosaics between the companies that are running the infrastructure, while other participants need to pay fees in the currency mosaic to consume services.

<div class="info">

**Note**

Configuration parameters are [editable](https://github.com/proximax-storage/catapult-server/blob/master/resources/config-network.properties). Public network configuration may differ.

</div>

## Local validating

During the installation of [Sirius-Chain-server](./node.md) in local or in a VPS, you are asked to set up an account that will be used to validate. The [block header](./block.md#blockheader) includes the public key and signature generated by the validator account.

Local validating is secure as long as no one accesses your node instance, which is storing the private key.

## Delegated validating

Delegated validating enables an account to use a proxy private key that can be shared with a Sirius-Chain-server node securely. In other words, you can use the importance of your account to create new blocks without running a node.

After an account activates delegated validating, its importance is transferred to a remote account. The remote account inherits the importance of the original account.

Security-wise, sharing a proxy private key does not compromise the original account since:

- The remote account has zero balance.
- The remote account by itself can’t transfer the importance to another account.
- The original account receives the resulting fees.

### Comparison between local and delegated validating

|  |	**Local validating** |	**Delegated validating**
|--|----------------------|---------------------------
|**Configuration**	| Setup Sirius-Chain-server node. |	Activate remote validating.
|**Cost**  |	The node maintenance (electricity, cost VPN). |	The transaction fee.
|**Security**  |	The private key is stored in the node. |	A proxy private key is shared with node.
|**Reward** | Equal. | Equal.

## Schemas

### AccountLinkTransaction

Announce an AccountLinkTransaction to delegate the account importance to a proxy account. By doing so, you can enable delegated validating.

**Version**: 0x02

**Entity type**: 0x414C

**Inlines**:

- [Transaction](./transaction.md#transaction) or [EmbeddedTransaction](./transaction.md#embeddedtransaction)

**Property** | **Type**  |	**Description**
-------------|------------|-------------------
remoteAccountKey | 32 bytes (binary) | The public key of the remote account.
linkAction | [LinkAction](#linkaction) | The account link action.

### LinkAction

Enumeration: uint8

**Id** | **Description**
-------|----------------
0 |	Link.
1 |	Unlink.