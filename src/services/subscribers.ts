import { Subscriber } from '@types';
import { AxiosInstance } from 'axios';

export default function subscribers(httpClient: AxiosInstance) {
  async function getSubscribers(pageNumber = 1) {
    return await httpClient
      .get(`/subscribers_${pageNumber}.json`)
      .then((res) => res.data);
  }

  return {
    getSubscribers,
  };
}
