import React, { useRef, useState } from "react";
import styled from "styled-components";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  order: Number;
  header: string;
  content: string;
};

type State = {
  open: boolean;
  ref: ReturnType<typeof React.createRef<HTMLDivElement>>;
};

const Collapse = ({ order, header, content, ...rest }: Props) => {
  const [open, setOpen] = useState<State["open"]>(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <CollapseLayout ref={ref} tabIndex={0} {...rest}>
      <CollapseHeader onClick={() => setOpen(!open)}>
        <div>
          <p>{order.toString().padStart(2, "0")}</p>
          <p>{header}</p>
        </div>
        <span className="material-symbols-outlined">
          {open ? "arrow_upward" : "arrow_downward"}
        </span>
      </CollapseHeader>
      <CollapseContent>
        <div style={{ display: open ? "block" : "none" }}>{content}</div>
      </CollapseContent>
    </CollapseLayout>
  );
};

const CollapseLayout = styled.div`
  border-top: 1px solid #b0a8fe;
  border-bottom: 1px solid #b0a8fe;
  width: 100%;
`;

const CollapseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  cursor: pointer;

  & > div {
    display: flex;
    & > p {
      color: #b0a8fe;
      margin: 0;
    }

    & > p + p {
      padding-left: 1rem;
    }
  }

  & > .material-symbols-outlined {
    color: #b0a8fe;
  }

  @media only screen and (max-width: 810px) {
    padding: 1rem 1.5rem;
    text-align: start;
  }
`;

const CollapseContent = styled.div`
  font-size: 16px;
  color: white;
  text-align: start;
  overflow: hidden;
  width: 90%;

  & > div {
    padding: 0 3rem 2rem 3rem;
    display: none;
  }

  @media only screen and (max-width: 810px) {
    font-size: 12px;
  }
`;

export default Collapse;
