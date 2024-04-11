export const isLocal: () => boolean = () => {
  return process.env.NODE_ENV === "development";
};

export const isEnterKeyPressed: (e: React.KeyboardEvent) => boolean = (e) => {
  return e.key === "Enter" || e.code === "Enter";
};

export const isEscKeyPressed: (e: React.KeyboardEvent) => boolean = (e) => {
  return e.key === "Escape" || e.code === "Escape";
};
