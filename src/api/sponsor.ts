import {
  Patron,
  Sponsor,
  SponsorBenefit,
  SponsorLevel,
  SponsorLevelWithSponsor,
} from "models/sponsor";
import { SPONSOR_LEVELS_WITH_SPONSORS } from "./data/sponsor_levels_with_sponsors";
import { SPONSOR_BENEFITS } from "./data/sponsor_benefits";
import { SPONSOR_LEVELS } from "./data/sponsor_levels";
import { PATRONS } from "./data/patrons";

export function detailSponsor(id: string): Promise<Sponsor> {
  return new Promise((resolve, reject) => {
    // instance
    //   .get<APISponsor>(`/2024/sponsors/list/${id}/`)
    //   .then((response) => {
    //     resolve(Sponsor.fromAPI(response.data));
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     reject(getErrorMessage(error));
    //   });

    level_loop: for (const level of SPONSOR_LEVELS_WITH_SPONSORS) {
      for (const sponsor of level.sponsor) {
        if (`${sponsor.id}` === `${id}`) {
          resolve(Sponsor.fromAPI(sponsor));
          break level_loop;
        }
      }
    }

    reject("해당하는 후원사 없음");
  });
}

export function listSponsorLevels(): Promise<SponsorLevel[]> {
  return new Promise((resolve, reject) => {
    // instance
    //   .get<APISponsorLevel[]>("/2024/sponsors/levels")
    //   .then((response) => {
    //     resolve(SponsorLevel.fromAPIs(response.data));
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     reject(getErrorMessage(error));
    //   });

    try {
      resolve(SponsorLevel.fromAPIs(SPONSOR_LEVELS));
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}

export function listSponsorLevelWithSponsor(): Promise<SponsorLevelWithSponsor[]> {
  return new Promise((resolve, reject) => {
    // instance
    //   .get<APISponsorLevelWithSponsor[]>("/2024/sponsors/levels/with-sponsor/")
    //   .then((response) => {
    //     resolve(SponsorLevelWithSponsor.fromAPIs(response.data));
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     reject(getErrorMessage(error));
    //   });

    try {
      resolve(SponsorLevelWithSponsor.fromAPIs(SPONSOR_LEVELS_WITH_SPONSORS));
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}

export function listSponsorBenefits(): Promise<SponsorBenefit[]> {
  return new Promise((resolve, reject) => {
    // instance
    //   .get<APISponsorBenefit[]>("/2024/sponsors/benefits/")
    //   .then((response) => {
    //     resolve(SponsorBenefit.fromAPIs(response.data));
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     reject(getErrorMessage(error));
    //   });

    try {
      resolve(SponsorBenefit.fromAPIs(SPONSOR_BENEFITS));
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}

export function listPatrons(): Promise<Patron[]> {
  return new Promise((resolve, reject) => {
    // instance
    //   .get<APIPatron[]>(`${process.env.REACT_APP_PYCONKR_SHOP_API}/v1/ext/patron/?year=2024`)
    //   .then((response) => {
    //     resolve(Patron.fromAPIs(response.data));
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     reject(getErrorMessage(error));
    //   });

    try {
      resolve(Patron.fromAPIs(PATRONS));
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}
