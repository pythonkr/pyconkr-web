import { getErrorMessage } from "api"
import instance from "lib/axios"
import { APISponsor, APISponsorBenefit, APISponsorLevel, APISponsorLevelWithSponsor } from "models/api/sponsor"
import { Sponsor, SponsorBenefit, SponsorLevel, SponsorLevelWithSponsor } from "models/sponsor"


export function detailSponsor(id: string): Promise<Sponsor> {
  return new Promise((resolve, reject) => {
    instance.get<APISponsor>(`http://localhost:8888/2024/sponsors/list/${id}/`).then(response => {
      resolve(Sponsor.fromAPI(response.data));
    }).catch(error => {
      console.error(error);
      reject(getErrorMessage(error));
    })
    return;
  })
}

export function listSponsorLevels(): Promise<SponsorLevel[]> {
  return new Promise((resolve, reject) => {
    instance.get<APISponsorLevel[]>("http://localhost:8888/2024/sponsors/levels").then((response) => {
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
    instance
      .get<APISponsor[]>("http://localhost:8888/2024/sponsors/list/")
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
    instance
      .get<APISponsorLevelWithSponsor[]>("http://localhost:8888/2024/sponsors/levels/with-sponsor/")
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
    instance.get<APISponsorBenefit[]>("http://localhost:8888/2024/sponsors/benefits/").then(response => {
      resolve(SponsorBenefit.fromAPIs(response.data));
    }).catch(error => {
      console.error(error);
      reject(getErrorMessage(error));
    })
  })
}
