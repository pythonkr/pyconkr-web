const Menus = {
  about: {
    name: "파이콘 한국",
    sub: [
      {
        name: "파이콘 한국 2024",
        path: "pyconkr2024",
      },
      {
        name: "파이콘 한국 행동 강령",
        path: "coc",
      },
      {
        name: "파이콘 한국 준비위원회",
        path: "organizing-team",
      },
      {
        name: "지난 파이콘 한국",
        path: "previous-pyconkr",
      },
    ],
  },
  program: {
    name: "프로그램",
    sub: [
      // {
      //   name: "키노트",
      //   path: "keynote",
      // },
      // {
      //   name: "발표",
      //   path: "session",
      // },
      {
        name: "스프린트",
        path: "sprint",
      },
      {
        name: "튜토리얼",
        path: "tutorial",
      },
    ],
  },
  // ticket: {
  //   name: "티켓",
  //   sub: [
  //     {
  //       name: "티켓 구매하기",
  //       path: "buy",
  //     },
  //     {
  //       name: "구매 내역",
  //       path: "payment-list",
  //     },
  //   ],
  // },
  contribution: {
    name: "기여하기",
    sub: [
      {
        name: "발표 제안하기",
        path: "cfp",
      },
      {
        name: "발표안 작성 가이드",
        path: "cfp/guide",
      },
      {
        name: "키노트 연사 추천하기",
        path: "recommending-keynote",
      },
      {
        name: "영상 자막",
        path: "video-subtitle",
      },
    ],
  },
  sponsoring: {
    name: "후원하기",
    sub: [
      {
        name: "후원사 안내",
        path: "sponsor/prospectus",
      },
      {
        name: "개인 후원자",
        path: "patron",
      },
      {
        name: "후원사 혜택 안내",
        path: "sponsor/benefit",
      },
      {
        name: "후원사로 참여하기",
        path: "sponsor/join",
      },
      {
        name: "후원사 FAQ",
        path: "sponsor/faq",
      },
      {
        name: "후원사 약관",
        path: "sponsor/terms",
      },
    ],
  },
} as const;

export default Menus;
