import { useDispatch } from "react-redux";

import { setLanguage } from "store/Core";

export type MenuElementOnClickArgType = {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  navigate?: (path: string) => void;
  dispatch: ReturnType<typeof useDispatch>;
};

export type MenuElementType = {
  name: string;
  path?: string;
  onClick?: (_: MenuElementOnClickArgType) => void;
};

export type MenuType = { [key: string]: MenuElementType & { sub?: MenuElementType[] } };

const Menus: MenuType = {
  about: {
    name: "파이콘 한국",
    sub: [
      {
        name: "파이콘 한국 2024",
        path: "/about/pyconkr2024",
      },
      {
        name: "파이콘 한국 행동 강령",
        onClick: ({ setOpenMenu }) => {
          setOpenMenu(false);
          window.open(
            "https://pythonkr.github.io/pycon-code-of-conduct/ko/coc/a_intent_and_purpose.html",
            "_blank"
          );
        },
      },
      {
        name: "파이콘 한국 준비위원회",
        path: "/about/organizing-team",
      },
      {
        name: "자원봉사자",
        path: "/about/volunteer",
      },
      {
        name: "건강 관련 안내",
        path: "/about/health",
      },
      {
        name: "장소 안내",
        path: "/about/place",
      },
    ],
  },
  program: {
    name: "프로그램",
    sub: [
      {
        name: "튜토리얼",
        path: "/program/tutorial",
      },
      {
        name: "스프린트",
        path: "/program/sprint",
      },
    ],
  },
  ticket: {
    name: "티켓 구매",
    onClick: ({ setOpenMenu }) => {
      setOpenMenu(false);
      window.open("https://shop.pycon.kr/ticket", "_blank");
    },
  },
  session: {
    name: "세션",
    sub: [
      {
        name: "세션 목록",
        onClick: ({ setOpenMenu, navigate }) => {
          navigate?.("/session");
          setOpenMenu(false);
        },
      },
      {
        name: "세션 시간표",
        onClick: ({ setOpenMenu, navigate }) => {
          navigate?.("/session/timetable");
          setOpenMenu(false);
        },
      },
    ],
  },
  poster: {
    name: "포스터 세션",
    path: "/poster-session",
  },
  fa: {
    name: "재정 지원",
    path: "/fa",
  },
  sponsoring: {
    name: "후원하기",
    sub: [
      {
        name: "후원사 안내",
        path: "/sponsoring/sponsor/prospectus",
      },
      {
        name: "개인 후원자",
        path: "/sponsoring/patron",
      },
    ],
  },
  language: {
    name: "Language",
    sub: [
      {
        name: "한국어",
        onClick: ({ setOpenMenu, dispatch }) => {
          setOpenMenu(false);
          dispatch(setLanguage("KOR"));
        },
      },
      {
        name: "English",
        onClick: ({ setOpenMenu, dispatch }) => {
          setOpenMenu(false);
          dispatch(setLanguage("ENG"));
        },
      },
    ],
  },
} as const;

export default Menus;
