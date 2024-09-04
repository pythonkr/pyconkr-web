export type APISponsor = {
  id: string;
  name: string;
  desc: string;
  logo_image: string;
  url: string;
};

export type APISponsorBenefit = {
  id: Number;
  name: string;
  desc: string;
  unit: string;
  is_countable: boolean;
  offer: Number;
}

export type APISponsorLevel = {
  id: Number;
  name: string;
  desc: string;
  visible: boolean;
  price: Number;
  limit: Number;
  order: Number;
  benefits: APISponsorBenefit[];
}

export type APISponsorLevelOnly = {
  id: Number;
  name: string;
  desc: string;
  visible: boolean;
  price: Number;
  limit: Number;
  order: Number;
}

export type APISponsorLevelWithSponsor = {
  id: Number;
  name: string;
  desc: string;
  visible: boolean;
  order: Number;
  sponsor: APISponsor[];
}