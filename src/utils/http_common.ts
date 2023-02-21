import axios from 'axios';

const HTTP = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default HTTP;
