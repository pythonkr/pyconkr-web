import EngTranslationKey from "locale/English/translation";

import { RootState } from "store";

import { useCallback } from "react";
import { useSelector } from "react-redux";

const useTranslation = () => {
  const language = useSelector<RootState, RootState["core"]["language"]>(
    (state) => state.core.language
  );
  const t = useCallback(
    (key: string, suffix: string = "") => {
      let json;
      switch (language) {
        case "ENG":
          json = EngTranslationKey;
          break;
        case "KOR":
          return key;
        default:
          json = EngTranslationKey;
          break;
      }
      const sentence = `${key}${suffix}`

      return key in json ? json[sentence as keyof typeof json] : key;
    },
    [language]
  );

  return t;
};

export default useTranslation;
