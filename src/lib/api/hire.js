import { protectedFetch } from "../core/server"

export const getApplicationsByHire = async (hireId) => {
  return await protectedFetch(`/api/hires?hireId=${hireId}`);

}