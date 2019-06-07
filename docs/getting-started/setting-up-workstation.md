---
id: setting-up-workstation
title: Setting up your workstation
---
This first guide will walk you through a step-by-step installation of the required tools to start developing on NEM.

## Running Catapult Service Bootstrap
![Catapult Layer](/img/four-layer-architecture-basic.png "Catapult Layer")

**Catapult Server nodes** (layer 1) build the peer-to-peer blockchain network. **Catapult Rest nodes** (layer 2) provide the API gateway that the applications may use to access the blockchain and its features.

You are going to run a private chain for learning purposes using [Catapult Service Bootstrap](https://github.com/tech-bureau/catapult-service-bootstrap). This service runs Catapult server instances and Catapult REST nodes locally.

1. Make sure you have [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed before running the following commands:

```
$> git clone https://github.com/tech-bureau/catapult-service-bootstrap.git --branch v0.1.0
$> cd catapult-service-bootstrap
$> docker-compose up
```

<div class="info">

**NOTE** <br>
Is catapult service bootstrap not working? Check [these troubleshooting tips](https://github.com/tech-bureau/catapult-service-bootstrap#known-issues).
</div>

######
2. Check if you can get the first block information:

```
$> curl localhost:3000/block/1
```

## Creating a test account
An account is a key pair (private and public key) associated to a mutable state stored in the ProximaX blockchain. In other words, you have a deposit box on the blockchain, which only you can modify with your key pair. As the name suggests, the private key has to be kept secret at all times. Anyone with access to the private key, ultimately has control over the account.

The **public key** is cryptographically derived from the private key. It would take millions of years to do the reverse process and therefore, the public key is safe to be shared.

Finally, the account address is generated with the public key, following the ProximaX blockchain protocol. Share this address instead of the public key, as it contains more information, such as a validity check or which network it uses (public, testnet or private).

[NEM2-CLI](../client/overview.md) conveniently allows you to perform the most commonly used commands from your terminal i.e. using it to interact with the blockchain, setting up an account, sending funds, etc.

1. Install NEM2-CLI using `npm`.

```
$> sudo npm install --global nem2-cli
```

2. Create an account with the command line tool.

```
$> nem2-cli account generate --network MIJIN_TEST --save --url http://localhost:3000
```

The `network flag` is set to MIJIN_TEST. Test network is an alternative ProximaX blockchain used for development and testing purposes.

Use `save flag` to store the account on your computer. NEM2-CLI uses stored account to sign the transactions that you start.

3. You should be able to see the following lines in your terminal, containing the account credentials:

> New Account: WCVG35-ZSPMYP-L2POZQ-JGSVEG-RYOJ3V-BNIU3U-N2E6 <br> Public Key: 33E0…6ED <br> Private Key: 0168…595

## What is XEM and how to get it?

The underlying cryptocurrency of the ProximaX network is called **XEM**. Every action on the ProximaX blockchain costs XEM, in order to provide an incentive for those who validate and secure the network.

Let’s use an account which already has XEM. We will need it to register the namespace and mosaic.

1. Open a terminal, and go to the directory where you have download Catapult Bootstrap Service.

```
$> cd  build/generated-addresses/
$> cat addresses.yaml
```
2. Under the section `nemesis_addresses`, you will find the key pairs which contain XEM.
3. Load the first account as a profile in NEM2-CLI.
```
$> nem2-cli profile create

Introduce network type (MIJIN_TEST, MIJIN, MAIN_NET, TEST_NET): MIJIN_TEST
Introduce your private key: 41************************************************************FF
Introduce ProximaX 2 Node URL. (Example: http://localhost:3000): http://localhost:3000
Insert profile name (blank means default and it could overwrite the previous profile):
```
## Setting up the development environment
It is time to choose a programming language. Pick the one you feel most comfortable with, or follow your project requirements.

Create a folder for your new project and run the instructions for the selected language.

<!--DOCUSAURUS_CODE_TABS-->
<!--TypesSript-->

1. Create a `package.json` file. The minimum required Node.js version is 8.9.X.
```
$> npm init
```
2. Install nem2-sdk and rxjs library.
```
$> npm install nem2-sdk rxjs
```
<!--END_DOCUSAURUS_CODE_TABS-->

3. nem2-sdk is build with TypeScript language. It is recommended to use TypeScript instead of JavaScript when building applications for ProximaX blockchain.

Make sure you have at least version 2.5.X installed.
```
$> sudo npm install --global typescript
$> typescript --version
```

4. Use ts-node to execute TypeScript files with node.
```
$> sudo npm install --global ts-node
```