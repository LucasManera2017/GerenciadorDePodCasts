import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller';
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methods';

const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {


  //queryString
  const [baseUrl, queryString] = request.url?.split("?") ?? ["",""];


  if(request.method === HttpMethods.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
  }

  if(request.method === HttpMethods.GET && baseUrl === Routes.FILTER) {
    await getFilterEpisodes(request, response);
  }
});


const port = process.env.PORT;

server.listen(port, () => {
  console.log(`servidor iniciado na porta ${port}`);
})