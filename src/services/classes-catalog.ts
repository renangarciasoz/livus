import { AxiosInstance } from 'axios';

export default function classesCatalog(httpClient: AxiosInstance) {
  async function getClassesCatalog() {
    return await httpClient
      .get(`/classes_catalog.json`)
      .then((res) => res.data);
  }

  return {
    getClassesCatalog,
  };
}
