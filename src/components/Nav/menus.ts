import { useDispatch } from "react-redux"

import { openGlobalDialog, setLanguage } from "store/Core"
import { DIALOG_CONST_PROGRAM_NOT_HELD_ON_2024 } from "store/Core/dialog"

export type MenuElementOnClickArgType = {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
  navigate?: (path: string) => void
  dispatch: ReturnType<typeof useDispatch>
}

export type MenuElementType = {
  name: string
  style?: React.CSSProperties
  path?: string
  onClick?: (_: MenuElementOnClickArgType) => void
}

export type MenuType = { [key: string]: MenuElementType & { sub?: MenuElementType[] } }

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
          setOpenMenu(false)
          window.open("https://2023.pycon.kr/coc/purpose", "_blank")
        },
      },
      {
        name: "건강 관련 안내",
        onClick: ({ setOpenMenu }) => {
          setOpenMenu(false)
          window.open("/about/health", "_blank")
        }
      },
      // {
      //   name: "파이콘 한국 준비위원회",
      //   path: "/about/organizing-team",
      // },
      // {
      //   name: "지난 파이콘 한국",
      //   path: "/about/previous-pyconkr",
      // },
    ],
  },
  // keynote: {
  //   name: "키노트",
  //   sub: [
  //     {
  //       name: "키노트",
  //       path: "/keynote/keynote",
  //     },
  //     {
  //       name: "발표",
  //       path: "/keynote/session",
  //     },
  //   ],
  // },
  program: {
    name: "프로그램",
    onClick: ({ setOpenMenu, dispatch }) => {
      setOpenMenu(false)
      dispatch(openGlobalDialog(DIALOG_CONST_PROGRAM_NOT_HELD_ON_2024))
    }
  },
  ticket: {
    name: "티켓 구매",
    onClick: ({ setOpenMenu }) => {
      setOpenMenu(false)
      window.open("https://shop.pycon.kr/ticket", "_blank")
    }
  },
  session: {
    name: "세션",
    onClick: ({ setOpenMenu, navigate }) => {
      navigate?.("/session")
      setOpenMenu(false)
    },
  },
  sponsoring: {
    name: "후원하기",
    sub: [
      {
        name: "후원사 안내",
        path: "/sponsoring/sponsor/prospectus"
      },
      // {
      //   name: "개인 후원자",
      //   path: "/sponsoring/patron",
      // },
      // {
      //   name: "후원사 혜택 안내",
      //   path: "/sponsoring/sponsor/benefit",
      // },
      // {
      //   name: "후원사로 참여하기",
      //   path: "/sponsoring/sponsor/join",
      // },
      // {
      //   name: "후원사 FAQ",
      //   path: "/sponsoring/sponsor/faq",
      // },
      // {
      //   name: "후원사 약관",
      //   path: "/sponsoring/sponsor/terms",
      // },
    ],
  },
  language: {
    name: "언어",
    sub: [
      {
        name: "한국어",
        onClick: ({ setOpenMenu, dispatch }) => {
          setOpenMenu(false)
          dispatch(setLanguage("KOR"))
        }
      },
      {
        name: "English",
        onClick: ({ setOpenMenu, dispatch }) => {
          setOpenMenu(false)
          dispatch(setLanguage("ENG"))
        }
      },
    ]
  }
} as const

export default Menus
