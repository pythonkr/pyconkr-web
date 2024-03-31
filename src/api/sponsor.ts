import { Sponsor } from "models/sponsor";
import axios from "lib/axios";
import { APISponsor } from "models/api/sponsor";
import { getErrorMessage } from "api";

export function listSponsors(): Promise<Sponsor[]> {
  return new Promise((resolve, reject) => {
    axios
      .get<APISponsor[]>("/sponsor")
      .then((response) => {
        resolve(Sponsor.fromAPIs(response.data));
      })
      .catch((error) => {
        console.error(error);
        reject(getErrorMessage(error));
      });
  });
}
