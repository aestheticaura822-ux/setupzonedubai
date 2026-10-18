import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: "http://localhost:4001/graphql", token: "35b0401e59a1c879cc2e9e39690f72d409f28c82", queries,  });
export default client;
  