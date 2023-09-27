import {createClient} from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "69qdrlgx",
  dataset: "production",
  apiVersion: "2022-03-10",
  token: process.env.REACT_APP_SANITY_TOKEN,
  useCdn: true,
  ignoreBrowserTokenWarning:true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
