import server from "../dist/server/server.js";

export default async function handler(request) {
  // TanStack Start's server.fetch expects (request, env, context)
  // Vercel Node.js functions support the Web Request API.
  return server.fetch(request, {}, {});
}
