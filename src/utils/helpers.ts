import clsx, { ClassValue } from "clsx";

export const classnames = (...inputs: ClassValue[]) => clsx(inputs);

export const timeSince = (date: string) => {
  const formatter = new Intl.RelativeTimeFormat("en");
  const ranges: Record<string, number> = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  };
  const secondsElapsed = (new Date(date).getTime() - Date.now()) / 1000;
  for (let key in ranges) {
    if (ranges[key] < Math.abs(secondsElapsed)) {
      const delta = secondsElapsed / ranges[key];
      return formatter.format(
        Math.round(delta),
        key as Intl.RelativeTimeFormatUnit
      );
    }
  }
};

export const getPastDate = (past: string) => {
  const currentDate = new Date();
  const dateMap: Record<string, () => void> = {
    PastHour: () => currentDate.setTime(currentDate.getTime() - 60 * 60 * 1000),
    Past24: () => currentDate.setDate(currentDate.getDate() - 1),
    PastWeek: () => currentDate.setDate(currentDate.getDate() - 7),
    PastMonth: () => currentDate.setDate(currentDate.getDate() - 30),
    PastYear: () => currentDate.setDate(currentDate.getDate() - 365),
  };
  if (!dateMap[past]) {
    return null;
  }

  dateMap[past]();
  return currentDate;
};

export const getInitial = (name: string) => name.split("")[0];
