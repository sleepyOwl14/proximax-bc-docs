---
id: create-open-account
title: Creating and opening an account
---
Create a new [account](../../built-in-features/account.md) and open it.

## Prerequisites

- Finish the [getting started section](../../getting-started/setting-up-workstation.md)
- Text editor or IDE
- XPX-Chain-SDK or xpx2-CLI

## Let’s get into some code

An account is a key pair (private and public key) associated to a mutable state stored in the Sirius-Chain.

<!--DOCUSAURUS_CODE_TABS-->
<!--TypesSript-->

```ts
const account = Account.generateNewAccount(NetworkType.MIJIN_TEST);

console.log('Your new account address is:', account.address.pretty(), 'and its private key', account.privateKey);
```

<!--JavaSript-->
```js
const account = Account.generateNewAccount(NetworkType.MIJIN_TEST);

console.log('Your new account address is:', account.address.pretty(), 'and its private key', account.privateKey);
```

<!--bash-->
```sh
xpx2-cli account generate --network MIJIN_TEST
```

<!--END_DOCUSAURUS_CODE_TABS-->

The **private key** uniquely identifies a Sirius-Chain account and holds all of its power. It is a priority to make sure it is stored safely somewhere **offline** and not to share it with anyone.

The **public key** is cryptographically derived from the private key and safe to be shared. In spite of that, it is preferable to share the **address**, which contains further information such as network and validity check.

If you already have a private key, it is not necessary to generate a new account:

<!--DOCUSAURUS_CODE_TABS-->
<!--TypesSript-->

```ts
// Replace with a private key
const privateKey = process.env.PRIVATE_KEY as string;

const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

console.log('Your account address is:', account.address.pretty(), 'and its private key', account.privateKey);
```

<!--JavaSript-->
```js
// Replace with a private key
const privateKey = process.env.PRIVATE_KEY;

const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

console.log('Your account address is:', account.address.pretty(), 'and its private key', account.privateKey);
```

<!--Java-->
```java
    // Replace with a private key
    final String privateKey = "";

    final Account account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Using a Wallet

If the programming language of the SDK you are using allows client-side development, you can create a wallet.

A wallet enables you to store your account to sign transactions, encrypting your private key with a password.

<!--DOCUSAURUS_CODE_TABS-->
<!--TypesSript-->

```ts
const password = new Password('password');

const wallet = SimpleWallet.create('wallet-name', password, NetworkType.MIJIN_TEST);

const account = wallet.open(password);

console.log('Your new account address is:', account.address.pretty(), 'and its private key', account.privateKey);
```

<!--JavaSript-->
```js
const password = new Password('password');

const wallet = SimpleWallet.create('wallet-name', password, NetworkType.MIJIN_TEST);

const account = wallet.open(password);

console.log('Your new account address is:', account.address.pretty(), 'and its private key', account.privateKey);
```

<!--bash-->
```sh
xpx2-cli account generate --network MIJIN_TEST --save --url http://localhost:3000 --profile test
```

<!--END_DOCUSAURUS_CODE_TABS-->

Do you have a private key? You can create and open a wallet importing your private key.

<!--DOCUSAURUS_CODE_TABS-->
<!--TypesSript-->

```ts
const password = new Password('password');

// Replace with a private key
const privateKey = process.env.PRIVATE_KEY as string;

const wallet = SimpleWallet.createFromPrivateKey('wallet-name', password, privateKey, NetworkType.MIJIN_TEST);

const account = wallet.open(password);

console.log('Your account address is:', account.address.pretty(), 'and its private key', account.privateKey);
```

<!--JavaSript-->
```js
const password = new Password('password');

// Replace with a private key
const privateKey = process.env.PRIVATE_KEY;

const wallet = SimpleWallet.createFromPrivateKey('wallet-name', password, privateKey, NetworkType.MIJIN_TEST);

const account = wallet.open(password);

console.log('Your account address is:', account.address.pretty(), 'and its private key', account.privateKey);
```

<!--bash-->
```sh
xpx2-cli profile create --privatekey your_private_key --network MIJIN_TEST --url http://localhost:3000 --profile test
```

<!--END_DOCUSAURUS_CODE_TABS-->