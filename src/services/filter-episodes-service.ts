import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repoPodcasts } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

  //define a interface de retorno
  let responseFormat: PodcastTransferModel = {
    statusCode: 200,
    body: []
  };

  //buscando os dados
  const queryString = podcastName?.split("?p=")[1] ?? "";
  const data = await repoPodcasts(queryString);

  //verifico se tem conteudo
  responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NOT_FOUND;

  responseFormat.body = data;

  return responseFormat;
}