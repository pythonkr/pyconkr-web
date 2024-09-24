export type APISponsor = {
  id: string;
  name: string;
  desc: string;
  logo_image: string;
  url: string;
};

export type APISponsorBenefit = {
  id: number;
  name: string;
  desc: string;
  unit: string;
  is_countable: boolean;
  offer: number;
  uncountable_offer: string;
};

export type APISponsorLevel = {
  id: number;
  name: string;
  desc: string;
  visible: boolean;
  price: number;
  limit: number;
  order: number;
  benefits: APISponsorBenefit[];
};

export type APISponsorLevelOnly = {
  id: number;
  name: string;
  desc: string;
  visible: boolean;
  price: number;
  limit: number;
  order: number;
};

export type APISponsorLevelWithSponsor = {
  id: number;
  name: string;
  desc?: string;
  visible: boolean;
  order: number;
  sponsor: APISponsor[];
};

export type APIPatron = {
  name: string;
  message?: string | null;
  sequence: number;
};
