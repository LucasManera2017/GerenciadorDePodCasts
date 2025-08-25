import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller';
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methods';

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {


  //queryString
  const baseUrl = request.url?.split("?")[0];

  if(request.method === HttpMethods.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
  }

  if(request.method === HttpMethods.GET && baseUrl === Routes.FILTER) {
    await getFilterEpisodes(request, response);
  }
};
