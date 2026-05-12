import os from "node:os";
import server from "../dist/server/server.js";

export default async function handler(request) {
  // Explicitly using a Node-only module to prevent Vercel from assuming Edge runtime
  const platform = os.platform();
  console.log(`Handling request on ${platform}`);
  
  return server.fetch(request, {}, {});
}
