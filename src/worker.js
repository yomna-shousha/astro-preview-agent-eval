export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const requestId = crypto.randomUUID();
    const debugId = request.headers.get("x-debug-id") || url.searchParams.get("debugId") || requestId;

    if (url.pathname === "/api/health") {
      const event = baseEvent("health_checked", request, env, requestId, debugId);
      console.log(event);
      return json({ ok: true, requestId, debugId, environment: event.environment });
    }

    if (url.pathname === "/api/catalog/sync") {
      const event = {
        ...baseEvent("catalog_sync_succeeded", request, env, requestId, debugId),
        itemCount: 12,
        staleItems: 0,
      };
      console.log(event);
      return json({ ok: true, requestId, debugId, synced: true, itemCount: 12 });
    }

    if (url.pathname === "/api/checkout/quote") {
      const event = {
        ...baseEvent("checkout_quote_created", request, env, requestId, debugId),
        currency: "USD",
        total: 48.5,
      };
      console.log(event);
      return json({ ok: true, requestId, debugId, currency: "USD", subtotal: 44, tax: 4.5, total: 48.5 });
    }

    return env.ASSETS.fetch(request);
  },
};

function baseEvent(event, request, env, requestId, debugId) {
  const url = new URL(request.url);
  return {
    event,
    requestId,
    debugId,
    path: url.pathname,
    method: request.method,
    environment: env.APP_ENV ?? "unknown",
    userAgent: request.headers.get("user-agent") ?? "unknown",
  };
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
