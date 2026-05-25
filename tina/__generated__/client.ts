import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'a7514e0b260d7df79009abc5f8cb45fd973f9438', queries,  });
export default client;
  