const Menus = {
  about: {
    name: "파이콘 한국",
    sub: [
      {
        name: "파이콘 한국 2024",
        path: "pyconkr2024",
      },
      {
        name: "개인 후원자",
        path: "patron",
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
      {
        name: "키노트",
        path: "keynote",
      },
      {
        name: "발표",
        path: "session",
      },
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
} as const;

export default Menus;
