import { APISponsor } from "./api/sponsor";

export class Sponsor {
  id: string;
  name: string;

  private constructor(p: Sponsor) {
    this.id = p.id;
    this.name = p.name;
  }

  static fromAPI(d: APISponsor): Sponsor {
    return new Sponsor({
      id: d.id,
      name: d.name,
    });
  }
  static fromAPIs(data: APISponsor[]): Sponsor[] {
    return data.map((d) => Sponsor.fromAPI(d));
  }
}
