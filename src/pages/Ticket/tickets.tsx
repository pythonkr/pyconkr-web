import React from "react";

export const tickets: {
  [ticketType: string]: {
    name: string;
    tickets: {
      name: string;
      price: number;
      description: string | React.ReactElement;
    }[];
  };
} = {
  conference: {
    name: "컨퍼런스 티켓",
    tickets: [
      {
        name: "컨퍼런스 티켓",
        price: 70000,
        description: (
          <p>
            주말에 열리는 컨퍼런스 티켓입니다.
            <br />
            <br />
            컨퍼런스 15일 전(2024.10.11.)까지 100% 환불이 가능합니다.
          </p>
        ),
      },
    ],
  },
  tutorial: {
    name: "튜토리얼 티켓",
    tickets: [
      {
        name: "Django로 웹사이트 만들기",
        price: 20000,
        description: (
          <p>
            금요일에 진행되는 튜토리얼 (Django로 웹사이트 만들기) 티켓입니다.
            <br />
            <br />
            2024.09.30.까지 환불 가능합니다.
          </p>
        ),
      },
    ],
  },
  sprint: {
    name: "스프린트 티켓",
    tickets: [
      {
        name: "django",
        price: 20000,
        description: (
          <p>
            금요일에 진행되는 스프린트 (django) 티켓입니다.
            <br />
            <br />
            2024.09.30.까지 환불 가능합니다.
          </p>
        ),
      },
    ],
  },
};
