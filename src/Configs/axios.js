import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api-bookyard.vigilance.pl/api/v1',
});
export default instance;
