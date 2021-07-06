import { AxiosInstance } from 'axios';
import creatorMock from '@fixtures/creator.json';

// import { NewsParams, NewsData } from '@types';

export default function creator(httpClient: AxiosInstance) {
  async function getCreatorInfos() {
    // const response = await httpClient.get(`/creator.json`);
    const response = await Promise.resolve(creatorMock);

    return response;
  }

  return {
    getCreatorInfos,
  };
}
