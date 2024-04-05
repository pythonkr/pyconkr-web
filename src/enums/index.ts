export type EnumItem<C extends string = string> = {
  code: C | "unknown";
  name: string;
};

export type Enum<T extends EnumItem<C>, C extends EnumItem["code"]> = {
  codes: readonly C[];
  isCode: (code: string) => code is C;
  fromCode: (code: string) => T;
} & {
  [CK in C | "unknown"]: T & {
    code: CK;
  };
};

export function Enum_isCode<C extends EnumItem["code"]>(
  codes: Enum<EnumItem<C>, C>["codes"]
): (obj: any) => obj is C {
  function isCode(obj: any): obj is C {
    return typeof obj === "string" && (codes as readonly string[]).includes(obj);
  }

  return isCode;
}
