export type PickKeysByType<T, TargetType> = {
  [TK in keyof T]: T[TK] extends TargetType ? (TargetType extends T[TK] ? TK : never) : never;
}[keyof T];

export type ValueOf<T> = T[keyof T];

export type RecursiveKeyof<T extends Record<string, any>> = ValueOf<{
  [TK in keyof T]: TK extends string
    ? T[TK] extends string | number | boolean | Date | undefined | null
      ? TK
      : T[TK] extends Array<infer R>
        ? R extends Record<string, any>
          ? `${TK}.${RecursiveKeyof<R>}`
          : TK
        : T[TK] extends Record<string, any>
          ? `${TK}.${RecursiveKeyof<T[TK]>}`
          : TK
    : never;
}>;

export type ExtractKey<T, U extends keyof T> = Extract<keyof T, U>;
