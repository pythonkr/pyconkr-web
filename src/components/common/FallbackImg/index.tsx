import React from "react";

type FallbackImgProps = React.HTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
  errorFallback: React.ReactNode;
};

export const FallbackImg: React.FC<FallbackImgProps> = (props) => {
  const [isError, setIsError] = React.useState(!props.src ? true : false);
  return isError ? (
    props.errorFallback
  ) : (
    <img src={props.src} alt={props.alt} onError={() => setIsError(true)} />
  );
};
