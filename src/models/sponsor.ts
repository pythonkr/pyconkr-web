import SponsorLevels, { SponsorLevel } from "enums/sponsorLevels";
import { APISponsor } from "./api/sponsor";

export class Sponsor {
  id: string;
  name: string;
  level: SponsorLevel;

  private constructor(p: Sponsor) {
    this.id = p.id;
    this.name = p.name;
    this.level = p.level;
  }

  static fromAPI(d: APISponsor): Sponsor {
    return new Sponsor({
      id: d.id,
      name: d.name,
      level: SponsorLevels.fromCode(d.level),
    });
  }
  static fromAPIs(data: APISponsor[]): Sponsor[] {
    return data.map((d) => Sponsor.fromAPI(d));
  }
}
