import { IncomingMessage, request, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

  const content = serviceListEpisodes();

  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify(content));
};