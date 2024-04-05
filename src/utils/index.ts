export const isLocal: () => boolean = () => {
  return process.env.NODE_ENV === "development";
};
