import { createClient } from 'contentful';

const client = createClient({
  space: 'aa2k8rr465mf',
  environment: 'master',
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response));
