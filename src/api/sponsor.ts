import { Sponsor } from "models/sponsor";
import axios from "lib/axios";
import { APISponsor } from "models/api/sponsor";
import { getErrorMessage } from "api";
import SponsorLevels from "enums/sponsorLevels";

export function listSponsors(): Promise<Sponsor[]> {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: "1",
        name: "후원사1",
        level: SponsorLevels.keystone,
      },
      {
        id: "2",
        name: "후원사2",
        level: SponsorLevels.gold,
      },
      {
        id: "3",
        name: "후원사3",
        level: SponsorLevels.ruby,
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
