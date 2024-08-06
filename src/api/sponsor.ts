import { Sponsor, SponsorBenefit, SponsorLevelWithSponsor } from "models/sponsor";
import axios from "lib/axios";
import { APISponsor, APISponsorBenefit, APISponsorLevel, APISponsorLevelWithSponsor } from "models/api/sponsor";
import { SponsorLevel } from "models/sponsor";
import { getErrorMessage } from "api";
import SponsorLevels from "enums/sponsorLevels";


export function listSponsorLevels(): Promise<SponsorLevel[]> {
  return new Promise((resolve, reject) => {
    axios.get<APISponsorLevel[]>("http://localhost:8888/2023/sponsors/levels").then((response) => {
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
      .get<APISponsor[]>("http://localhost:8888/2023/sponsors/list/")
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
      .get<APISponsorLevelWithSponsor[]>("http://localhost:8888/2023/sponsors/list/")
      .then((response) => {
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
    axios.get<APISponsorBenefit[]>("http://localhost:8888/2023/sponsors/benefits/").then(response => {
      resolve(SponsorBenefit.fromAPIs(response.data));
    }).catch(error => {
      console.error(error);
      reject(getErrorMessage(error));
    })
  })
}
