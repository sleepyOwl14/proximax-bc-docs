---
id: configuring-nodes
title: Configuring nodes
---
The left sidebar is the **node palette**. You can find NEM related nodes under:

- NEM2 Account
- NEM2 Transactions
- NEM2 Listeners
- NEM2 Utility

1. Open the NEM account tab and click once on the **account** node.

The right sidebar shows you the node description, properties, input fields and returned outputs.

You have to link nodes together, connecting the previous node outputs with the following node inputs.

In some cases, you could configure inputs and properties directly by double-clicking a node.

![NEM2 prototyping tool node palette](/img/nem2-prototyping-tool-node-palette.png "NEM2 prototyping tool node palette")

<p class=caption>The node palette and node help sidebars.</p>

2. Let’s link account with other nodes. As we need a `privateKey` as an input, we could opt to drag and drop and link **generateAccount** with **account** node, under *NEM Account*.

![NEM2 prototyping tool link nodes](/img/nem2-prototyping-tool-link-nodes.png "NEM2 prototyping tool link nodes")

<p class=caption>Drag and drop and link nodes together.</p>

3. Double-click on account node. Choose the `network` you want to use. Do the same for generateAccount node.

![NEM2 prototyping tool edit account node](/img/nem2-prototyping-tool-edit-account-node.png "NEM2 prototyping tool edit account node")

<p class=caption>Complete node properties.</p>

<div class=info>

**Note**

Have you seen `private key` under account node properties? Setting a property hardcoded overwrites the input. In other words, when not empty, this property will be used instead of `privateKey` output provided by generateAccount node.

</div>

4. Finally, find **debug** node in the node palette, under *output* tab. Link it with the account, and inside its properties change `output` to `complete msg object`.

## Configuring API gateway

Some nodes require to configure an API gateway (e.g. **announce transaction** and **listener** nodes).

1. Double-click on a node which needs this configuration.
2. Click on the pencil icon next to the `Server` input field.
3. Enter your `custom url` using http or https schema (e.g. http://localhost). Choose the `network` and `port` you want to use and then press `Update`.

![NEM2 prototyping tool edit server config node](/img/nem2-prototyping-tool-edit-server-config-node.png "NEM2 prototyping tool edit server config node")

## Running a flow

1. Click on the `deploy` button, at the top-right corner of your screen. Select the square attached to the first node to run the flow.

2. Check the output returned at the right sidebar, under the debug tab. NEM2 nodes return outputs following the structure `msg.nem.<name_of_the_output>`.

![NEM2 prototyping tool debug](/img/nem2-prototyping-tool-debug.png "NEM2 prototyping tool debug")

<p class=caption>See outputs under debug tab.</p>