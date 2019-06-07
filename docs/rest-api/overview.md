---
id: rest-api-overview
title: REST API Overview
sidebar_label: Overview
---
**Catapult REST API** combines HTTP and WebSockets to perform read and write actions in the ProximaX blockchain.

## Requests

Catapult REST uses port `3000`. It accepts both HTTP **GET**, **PUT** and **POST** requests.

Assuming that Catapult REST is running locally, HTTP GET requests can be executed from a browser and have the form:

[http://localhost:3000/](http://localhost:3000/)<path-to-API-request>

HTTP PUT and POST requests use JSON structures in the request body. Request returns data (if any is returned) using JSON structures. This kind of request cannot usually be executed from within the browser unless you use a [plugin](./tools.md) which enables you to do it.

[Catapult REST API Endpoints](/endpoints)

## Http errors

**Status code** |	**Description**
----------------|-------------------
200 |	Ok. The request has succeeded.
202 |	Accepted. The request has been accepted for processing but the processing has not been completed.
400 |	Bad request. Check your request syntax.
404 |	Not found. The resource does not exist.
409 |	Conflict. Check your arguments.
500 |	Internal error. Unexpected condition.

## Http status

**Key** |	**Description**
--------|---------------------
code |	Error identifier in camelCase.
message |	Error explained in human-readable format.

## Example
```js
{
  "code": "InvalidArgument",
  "message": "accountId has an invalid format"
}
```

## uint64: lower and higher

Javascript operate on 32 bit values. To enable representation up to 64 bits, the API returns numbers encoded in two parts: `lower` and `higher`.

Check [how to compact lower and higher into a single value](https://github.com/nemtech/nem2-library-js/blob/f171afb516a282f698081aea407339cfcd21cd63/src/coders/uint64.js#L37).