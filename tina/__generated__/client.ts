import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: "http://localhost:4001/graphql", token: "7ac17dfc85496ca1dbd35559eeda493c80cd8ec2", queries,  });
export default client;
  