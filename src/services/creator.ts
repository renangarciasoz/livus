import { AxiosInstance } from 'axios';

export default function creator(httpClient: AxiosInstance) {
  async function getCreatorInfos() {
    return await httpClient.get(`/creator.json`).then((res) => res.data);
  }

  return {
    getCreatorInfos,
  };
}
