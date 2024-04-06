import { CategoryCode } from "enums/categories";

type TranslationItem = "파이콘 한국" | "준비위원회" | "언어 변경";
type MenuTranslationItem = "재정 지원";

export type Translation = { [K in TranslationItem]: string } & {
  CATEGORY: { [K in CategoryCode | "unknown"]: string };
  MENU: { [K in MenuTranslationItem]: string };
};
