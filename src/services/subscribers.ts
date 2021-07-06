import { AxiosInstance } from 'axios';
import subscribers1 from '@fixtures/subscribers_1.json';
import subscribers2 from '@fixtures/subscribers_2.json';

export default function subscribers(httpClient: AxiosInstance) {
  async function getSubscribers(pageNumber = 1) {
    // const response = await httpClient.get(`/subscribers_${pageNumber}.json`);
    return await Promise.resolve(
      pageNumber !== 1 ? subscribers2 : subscribers1,
    );
  }

  return {
    getSubscribers,
  };
}
