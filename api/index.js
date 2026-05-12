import server from "../dist/server/server.js";

export const config = {
  runtime: "edge",
};

export default async function handler(request) {
  // TanStack Start's server.fetch expects (request, env, context)
  // On Vercel Edge, we only have the request. We pass empty objects for the rest.
  return server.fetch(request, {}, {});
}
