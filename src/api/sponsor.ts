import { Sponsor } from "models/sponsor";
import axios from "lib/axios";
import { APISponsor } from "models/api/sponsor";
import { getErrorMessage } from "api";

export function listSponsors(): Promise<Sponsor[]> {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: "1",
        name: "후원사1",
      },
      {
        id: "2",
        name: "후원사2",
      },
    ]);
    return;

    // eslint-disable-next-line no-unreachable
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
