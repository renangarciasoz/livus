import { AxiosInstance } from 'axios';
import classesCatalogMock from '@fixtures/classes_catalog.json';

export default function classesCatalog(httpClient: AxiosInstance) {
  async function getClassesCatalog() {
    // const response = await httpClient.get(`/classes_catalog.json`);
    const response = await Promise.resolve(classesCatalogMock);

    return response;
  }

  return {
    getClassesCatalog,
  };
}
