import { Sponsor, SponsorBenefit, SponsorLevelWithSponsor } from "models/sponsor";
import axios from "lib/axios";
import { APISponsor, APISponsorBenefit, APISponsorLevel, APISponsorLevelWithSponsor } from "models/api/sponsor";
import { SponsorLevel } from "models/sponsor";
import { getErrorMessage } from "api";


export function listSponsorLevels(): Promise<SponsorLevel[]> {
  return new Promise((resolve, reject) => {
    axios.get<APISponsorLevel[]>("https://api-dev.pycon.kr/2023/sponsors/levels").then((response) => {
      resolve(SponsorLevel.fromAPIs(response.data));
    }).catch((error) => {
      console.error(error);
      reject(getErrorMessage(error));
    })
    return;
  });
}

export function listSponsors(): Promise<Sponsor[]> {
  return new Promise((resolve, reject) => {
    axios
      .get<APISponsor[]>("https://api-dev.pycon.kr/2023/sponsors/list/")
      .then((response) => {
        resolve(Sponsor.fromAPIs(response.data));
      })
      .catch((error) => {
        console.error(error);
        reject(getErrorMessage(error));
      });
  });
}
export function listSponsorLevelWithSponsor(): Promise<SponsorLevelWithSponsor[]> {
  return new Promise((resolve, reject) => {
    axios
      .get<APISponsorLevelWithSponsor[]>("https://api-dev.pycon.kr/2023/sponsors/levels/with-sponsor/")
      .then((response) => {
        console.log("debug", response);
        resolve(SponsorLevelWithSponsor.fromAPIs(response.data));
      })
      .catch((error) => {
        console.error(error);
        reject(getErrorMessage(error));
      });
  });
}

export function listSponsorBenefits(): Promise<SponsorBenefit[]> {
  return new Promise((resolve, reject) => {
    axios.get<APISponsorBenefit[]>("https://api-dev.pycon.kr/2023/sponsors/benefits/").then(response => {
      resolve(SponsorBenefit.fromAPIs(response.data));
    }).catch(error => {
      console.error(error);
      reject(getErrorMessage(error));
    })
  })
}
