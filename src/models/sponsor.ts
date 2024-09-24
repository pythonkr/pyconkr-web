import {
  APISponsorLevel,
  APISponsorBenefit,
  APISponsor,
  APISponsorLevelOnly,
  APISponsorLevelWithSponsor,
  APIPatron,
} from "./api/sponsor";

export class SponsorBenefit {
  id: number;
  name: string;
  desc: string;
  offer: number;
  unit: string;
  is_countable: boolean;
  uncountable_offer: string;

  private constructor(p: SponsorBenefit) {
    this.id = p.id;
    this.name = p.name;
    this.desc = p.desc;
    this.offer = p.offer;
    this.unit = p.unit;
    this.is_countable = p.is_countable;
    this.uncountable_offer = p.uncountable_offer;
  }

  static fromAPI(d: APISponsorBenefit): SponsorBenefit {
    return new SponsorBenefit({
      id: d.id,
      name: d.name,
      desc: d.desc,
      offer: d.offer,
      unit: d.unit,
      is_countable: d.is_countable,
      uncountable_offer: d.uncountable_offer,
    });
  }

  static fromAPIs(data: APISponsorBenefit[]): SponsorBenefit[] {
    return data.map((d) => SponsorBenefit.fromAPI(d));
  }
}

export class SponsorLevel {
  id: number;
  name: string;
  desc: string;
  visible: boolean;
  price: number;
  limit: number;
  order: number;
  benefits: SponsorBenefit[];

  private constructor(p: SponsorLevel) {
    this.id = p.id;
    this.name = p.name;
    this.desc = p.desc;
    this.visible = p.visible;
    this.price = p.price;
    this.limit = p.limit;
    this.order = p.order;
    this.benefits = SponsorBenefit.fromAPIs(p.benefits);
  }

  static fromAPI(d: APISponsorLevel): SponsorLevel {
    return new SponsorLevel({
      id: d.id,
      name: d.name,
      desc: d.desc,
      visible: d.visible,
      price: d.price,
      limit: d.limit,
      order: d.order,
      benefits: d.benefits,
    });
  }

  static fromAPIs(data: APISponsorLevel[]): SponsorLevel[] {
    return data.map((d) => SponsorLevel.fromAPI(d));
  }
}

export class SponsorLevelWithSponsor {
  id: number;
  name: string;
  desc?: string;
  visible: boolean;
  order: number;
  sponsor: Sponsor[];

  private constructor(p: SponsorLevelWithSponsor) {
    this.id = p.id;
    this.name = p.name;
    this.desc = p.desc;
    this.visible = p.visible;
    this.order = p.order;
    this.sponsor = Sponsor.fromAPIs(p.sponsor);
  }

  static fromAPI(d: APISponsorLevelWithSponsor): SponsorLevelWithSponsor {
    return new SponsorLevelWithSponsor({
      id: d.id,
      name: d.name,
      desc: d.desc,
      visible: d.visible,
      order: d.order,
      sponsor: d.sponsor,
    });
  }

  static fromAPIs(data: APISponsorLevelWithSponsor[]): SponsorLevelWithSponsor[] {
    return data.map((d) => SponsorLevelWithSponsor.fromAPI(d));
  }
}

class SponsorLevelOnly {
  id: number;
  name: string;
  desc: string;
  visible: boolean;
  price: number;
  limit: number;
  order: number;

  private constructor(p: SponsorLevelOnly) {
    this.id = p.id;
    this.name = p.name;
    this.desc = p.desc;
    this.visible = p.visible;
    this.price = p.price;
    this.limit = p.limit;
    this.order = p.order;
  }

  static fromAPI(d: APISponsorLevelOnly): SponsorLevelOnly {
    return new SponsorLevelOnly({
      id: d.id,
      name: d.name,
      desc: d.desc,
      visible: d.visible,
      price: d.price,
      limit: d.limit,
      order: d.order,
    });
  }
}

export class Sponsor {
  id: string;
  name: string;
  desc: string;
  logo_image: string;
  url: string;

  private constructor(p: Sponsor) {
    this.id = p.id;
    this.name = p.name;
    this.desc = p.desc;
    this.logo_image = p.logo_image;
    this.url = p.url;
  }

  static fromAPI(d: APISponsor): Sponsor {
    return new Sponsor({
      id: d.id,
      name: d.name,
      desc: d.desc,
      logo_image: d.logo_image,
      url: d.url,
    });
  }

  static fromAPIs(data: APISponsor[]): Sponsor[] {
    return data.map((d) => Sponsor.fromAPI(d));
  }
}

export class Patron {
  name: string;
  message?: string | null;
  sequence: number;

  private constructor(p: Patron) {
    this.name = p.name;
    this.message = p.message;
    this.sequence = p.sequence;
  }

  static fromAPI(d: APIPatron): Patron {
    return new Patron({
      name: d.name,
      message: d.message,
      sequence: d.sequence,
    });
  }

  static fromAPIs(data: APIPatron[]): Patron[] {
    return data.map((d) => Patron.fromAPI(d));
  }
}
