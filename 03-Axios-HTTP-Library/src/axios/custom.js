import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'https://www.course-api.com',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer Token',
  },
});

export default authFetch;
