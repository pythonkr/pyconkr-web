import { Enum, EnumItem, Enum_isCode } from ".";

/** 세션 카테고리 */
export type Category = EnumItem<CategoryCode>;

const codes = ["web", "social"] as const; // TODO

export type CategoryCode = (typeof codes)[number];
const isCode = Enum_isCode(codes);
function fromCode(code: string): Category {
  return isCode(code) ? Categories[code] : Categories.unknown;
}

const Categories: Enum<Category, CategoryCode> = {
  codes: codes,
  isCode: isCode,
  fromCode: fromCode,
  web: {
    code: "web",
    name: "웹",
  },
  social: {
    code: "social",
    name: "소셜",
  },
  unknown: {
    code: "unknown",
    name: "알 수 없음",
  },
};

export default Categories;
