export const isLocal: () => boolean = () => {
  return process.env.NODE_ENV === "development";
};

export const isEnterKeyPressed: (e: React.KeyboardEvent) => boolean = (e) => {
  return e.key === "Enter" || e.code === "Enter";
};

export const isEscKeyPressed: (e: React.KeyboardEvent) => boolean = (e) => {
  return e.key === "Escape" || e.code === "Escape";
};

export function toDateIfValid(s: null | undefined): null;
export function toDateIfValid(s: string | Date): Date | null;
export function toDateIfValid(s: string | null | undefined | Date): Date | null {
  if (s instanceof Date && !isNaN(s.valueOf())) return s;
  if (typeof s === "string") {
    const d = new Date(s);
    if (!isNaN(d.valueOf())) return d;
    else return null;
  }
  return null;
}

/**
 * Y(연), M(월), D(일), H(시), m(분), S(초)
 */
export function dateToString(date: Date | null | undefined, format: string = "Y/M/D H:m"): string {
  if (date == null) return "";

  const year = date.getFullYear().toString();
  const m = date.getMonth() + 1;
  const month = (m > 9 ? "" : "0") + m;
  const d = date.getDate();
  const day = (d > 9 ? "" : "0") + d;

  const h = date.getHours();
  const hour = (h > 9 ? "" : "0") + h;
  const mn = date.getMinutes();
  const minute = (mn > 9 ? "" : "0") + mn;
  const s = date.getSeconds();
  const second = (s > 9 ? "" : "0") + s;

  return format
    .replace("Y", year)
    .replace("M", month)
    .replace("D", day)
    .replace("H", hour)
    .replace("m", minute)
    .replace("S", second);
}

export const isElapsed: (
  d1: Date,
  d2: Date,
  elapseTime: {
    year?: number;
    month?: number;
    day?: number;
    hour?: number;
    minute?: number;
    second?: number;
  }
) => boolean = (d1, d2, e) => {
  if (d1 > d2) return elapse(d2, e) <= d1;
  else return elapse(d1, e) <= d2;
};

/**
 * 입력한 날짜에서 기간만큼 지난 날짜 반환
 */
export const elapse: (
  d: Date,
  elapseTime: {
    year?: number;
    month?: number;
    day?: number;
    hour?: number;
    minute?: number;
    second?: number;
  }
) => Date = (d, e) => {
  let s: number = d.getTime();

  s += e.year !== undefined ? e.year * 365 * 24 * 60 * 60 * 1000 : 0;
  s += e.month !== undefined ? e.month * 30 * 24 * 60 * 60 * 1000 : 0;
  s += e.day !== undefined ? e.day * 24 * 60 * 60 * 1000 : 0;
  s += e.hour !== undefined ? e.hour * 60 * 60 * 1000 : 0;
  s += e.minute !== undefined ? e.minute * 60 * 1000 : 0;
  s += e.second !== undefined ? e.second * 1000 : 0;

  return new Date(s);
};

/** timezoneOffset으로 UTC로 변경 */
export function toUTC(date: Date): Date;
export function toUTC(date: null): null;
export function toUTC(date: Date | null): Date | null;
export function toUTC(date: Date | null): Date | null {
  if (date === null) return null;

  let utcDate = new Date(date);

  let offset = date.getTimezoneOffset();
  utcDate.setMinutes(utcDate.getMinutes() + offset);

  return utcDate;
}

/** UTC를 timezoneOffset으로 변경 */
export function fromUTC(date: Date): Date;
export function fromUTC(date: null): null;
export function fromUTC(date: Date | null): Date | null;
export function fromUTC(date: Date | null): Date | null {
  if (date === null) return null;

  let resultDate = new Date(date);

  let offset = date.getTimezoneOffset();
  resultDate.setMinutes(resultDate.getMinutes() - offset);

  return resultDate;
}

/**
 * 지금으로부터 얼마나 시간이 지났는지
 * @param date 기준 시각
 * @param unit 시간 단위
 * @returns 소수점 아래 버려진 경과 시간
 */
export function elapsedBefore(
  date: Date,
  unit: "second" | "minute" | "hour" | "day" = "second"
): number {
  const now = new Date();

  const elapsedTimeInMs = now.getTime() - date.getTime();

  switch (unit) {
    case "second":
      return Math.floor(elapsedTimeInMs / 1000);
    case "minute":
      return Math.floor(elapsedTimeInMs / 1000 / 60);
    case "hour":
      return Math.floor(elapsedTimeInMs / 1000 / 60 / 60);
    case "day":
      return Math.floor(elapsedTimeInMs / 1000 / 60 / 60 / 24);
    default:
      const type: never = unit;
      throw new Error(type);
  }
}
