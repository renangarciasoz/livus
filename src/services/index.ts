import { api } from 'libs/axios';
import classesCatalog from './classes-catalog';
import creator from './creator';
import subscribers from './subscribers';

export default {
  creator: creator(api),
  subscribers: subscribers(api),
  classesCatalog: classesCatalog(api),
};
