import EngTranslationKey from "locale/English/translation";

import { RootState } from "store";
import { Translation } from "locale/types";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { PickKeysByType, RecursiveKeyof } from "utils/types";

const useTranslation = () => {
  const language = useSelector<RootState, RootState["core"]["language"]>(
    (state) => state.core.language
  );
  const isTranslationKey = (
    key: RecursiveKeyof<Translation>
  ): key is PickKeysByType<Translation, string> => key in EngTranslationKey;

  const t = useCallback(
    (key: RecursiveKeyof<Translation>) => {
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

      if (isTranslationKey(key)) return json[key];
      else {
        const categoryIdx = key.indexOf(".");
        const category = key.slice(0, categoryIdx) as keyof Omit<
          Translation,
          PickKeysByType<Translation, string>
        >;
        const subKey = key.slice(categoryIdx + 1) as keyof Translation[typeof category];
        return json[category][subKey] ?? key;
      }
    },
    [language]
  );

  return t;
};

export default useTranslation;
