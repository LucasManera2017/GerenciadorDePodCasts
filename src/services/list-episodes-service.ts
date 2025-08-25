import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repoPodcasts } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";



export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

  //define o contrato
  let responseFormat: PodcastTransferModel = {
    statusCode: 200,
    body: []
  };

  //busca os dados
  const data = await repoPodcasts();

  //verifico o tipo de resposta
  responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NOT_FOUND;

  responseFormat.body = data;

  return responseFormat;
}
