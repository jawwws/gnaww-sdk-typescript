# Gnaww TypeScript/JavaScript SDK

Official TypeScript and JavaScript SDK for the Gnaww print intelligence API.

## Install

```bash
npm install @jawwws/gnaww
```

## Quick start

```ts
import { GnawwClient } from "@jawwws/gnaww";

const gnaww = new GnawwClient({
  apiKey: process.env.GNAWW_API_KEY!,
  workspaceId: process.env.GNAWW_WORKSPACE_ID,
});

const result = await gnaww.consume(
  "500 A5 double-sided flyers on 170gsm silk",
);
```

Gnaww may return clarification or review requirements when a print requirement is
incomplete. It does not guess unresolved physical attributes.

Capability matching does not by itself confirm price, live availability, producer
acceptance or an order.

Documentation: https://developer.gnaww.io

## Licence

MIT. See `LICENSE`.
