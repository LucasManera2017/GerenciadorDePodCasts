import { repoPodcasts } from "../repositories/podcasts-repository";



export const serviceListEpisodes = async () => {
  const data = await repoPodcasts();
  return data;
}
