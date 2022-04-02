import { Method } from 'axios';

export type Axios = {
  method?: Method;
  url: string;
  data?: object;
  params?: object;
};
