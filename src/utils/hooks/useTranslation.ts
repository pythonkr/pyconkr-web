import EngTranslationKey from "locale/English/translation";

import { RootState } from "store";

import { useCallback } from "react";
import { useSelector } from "react-redux";

const useTranslation = () => {
  const language = useSelector<RootState, RootState["core"]["language"]>(
    (state) => state.core.language
  );
  const t = useCallback(
    (key: string) => {
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

      return key in json ? json[key as keyof typeof json] : key;
    },
    [language]
  );

  return t;
};

export default useTranslation;
