import { Enum, EnumItem, Enum_isCode } from ".";

/** 후원사 등급 */
export type SponsorLevel = EnumItem<SponsorLevelCode> & {
  priority: number;
};

const codes = ["keystone", "diamond", "ruby", "gold", "silver", "community"] as const; // TODO

export type SponsorLevelCode = (typeof codes)[number];
const isCode = Enum_isCode(codes);
function fromCode(code: string): SponsorLevel {
  return isCode(code) ? SponsorLevels[code] : SponsorLevels.unknown;
}

const SponsorLevels: Enum<SponsorLevel, SponsorLevelCode> = {
  codes: codes,
  isCode: isCode,
  fromCode: fromCode,
  keystone: {
    code: "keystone",
    name: "키스톤",
    priority: 1,
  },
  diamond: {
    code: "diamond",
    name: "다이아몬드",
    priority: 2,
  },
  ruby: {
    code: "ruby",
    name: "루비",
    priority: 3,
  },
  gold: {
    code: "gold",
    name: "골드",
    priority: 4,
  },
  silver: {
    code: "silver",
    name: "실버",
    priority: 5,
  },
  community: {
    code: "community",
    name: "커뮤니티",
    priority: 6,
  },
  unknown: {
    code: "unknown",
    name: "알 수 없음",
    priority: 999,
  },
};

export default SponsorLevels;
