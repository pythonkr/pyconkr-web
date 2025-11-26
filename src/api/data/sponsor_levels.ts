import { APISponsorLevel } from "../../models/api/sponsor";


export const SPONSOR_LEVELS: APISponsorLevel[] = [
  {
    "id": 13,
    "name": "키스톤",
    "desc": null,
    "visible": true,
    "price": 20000000,
    "limit": 1,
    "order": 1,
    "benefits": [
      {
        "id": 1,
        "name": "티켓 지원",
        "desc": "파이콘 한국을 즐길 수 있는 컨퍼런스 티켓을 지원합니다. 티켓 개수는 후원 등급 별 상이합니다.",
        "unit": "매",
        "is_countable": true,
        "offer": 20,
        "uncountable_offer": null
      },
      {
        "id": 2,
        "name": "부스",
        "desc": "후원사만의 공간에서 개발자 채용, 회사 또는 서비스 홍보, 코딩 챌린지, 제비 뽑기 등 다양한 행사를 진행할 수 있습니다.",
        "unit": "칸",
        "is_countable": true,
        "offer": 5,
        "uncountable_offer": null
      },
      {
        "id": 3,
        "name": "테이블",
        "desc": "후원사만의 공간에서 증정품을 나눠주거나, 채용상담 등 네트워킹을 하실 수 있습니다.",
        "unit": "칸",
        "is_countable": true,
        "offer": 0,
        "uncountable_offer": "-"
      },
      {
        "id": 4,
        "name": "후원사 세션",
        "desc": "파이콘 한국에서 후원사 로고를 걸고 파이썬 또는 회사/단체 내의 개발 문화에 대해서 이야기 할 수 있습니다.",
        "unit": "세션",
        "is_countable": true,
        "offer": 1,
        "uncountable_offer": null
      },
      {
        "id": 5,
        "name": "홍보 영상",
        "desc": "파이콘 한국에서 발표 세션 중간데 후원 등급별 노출 횟수에 따라 후원사 홍보 영상을 송출합니다.",
        "unit": "회",
        "is_countable": true,
        "offer": 2,
        "uncountable_offer": null
      },
      {
        "id": 6,
        "name": "로고 노출",
        "desc": "파이콘 한국 행사 전체와 홈페이지를 통해서 로고가 노출되며, 지난 홈페이지도 계속 보관, 유지되어 지속적으로 로고가 노출됩니다.",
        "unit": "",
        "is_countable": false,
        "offer": 0,
        "uncountable_offer": "<p>네임택(티켓) 스트랩</p><p>현수막</p><p>스탠딩 배너</p><p>웹사이트</p>"
      }
    ]
  },
  {
    "id": 14,
    "name": "다이아몬드",
    "desc": null,
    "visible": true,
    "price": 10000000,
    "limit": 4,
    "order": 2,
    "benefits": [
      {
        "id": 1,
        "name": "티켓 지원",
        "desc": "파이콘 한국을 즐길 수 있는 컨퍼런스 티켓을 지원합니다. 티켓 개수는 후원 등급 별 상이합니다.",
        "unit": "매",
        "is_countable": true,
        "offer": 15,
        "uncountable_offer": null
      },
      {
        "id": 2,
        "name": "부스",
        "desc": "후원사만의 공간에서 개발자 채용, 회사 또는 서비스 홍보, 코딩 챌린지, 제비 뽑기 등 다양한 행사를 진행할 수 있습니다.",
        "unit": "칸",
        "is_countable": true,
        "offer": 3,
        "uncountable_offer": null
      },
      {
        "id": 3,
        "name": "테이블",
        "desc": "후원사만의 공간에서 증정품을 나눠주거나, 채용상담 등 네트워킹을 하실 수 있습니다.",
        "unit": "칸",
        "is_countable": true,
        "offer": 0,
        "uncountable_offer": "-"
      },
      {
        "id": 4,
        "name": "후원사 세션",
        "desc": "파이콘 한국에서 후원사 로고를 걸고 파이썬 또는 회사/단체 내의 개발 문화에 대해서 이야기 할 수 있습니다.",
        "unit": "세션",
        "is_countable": true,
        "offer": 1,
        "uncountable_offer": null
      },
      {
        "id": 5,
        "name": "홍보 영상",
        "desc": "파이콘 한국에서 발표 세션 중간데 후원 등급별 노출 횟수에 따라 후원사 홍보 영상을 송출합니다.",
        "unit": "회",
        "is_countable": true,
        "offer": 1,
        "uncountable_offer": null
      },
      {
        "id": 6,
        "name": "로고 노출",
        "desc": "파이콘 한국 행사 전체와 홈페이지를 통해서 로고가 노출되며, 지난 홈페이지도 계속 보관, 유지되어 지속적으로 로고가 노출됩니다.",
        "unit": "",
        "is_countable": false,
        "offer": 0,
        "uncountable_offer": "<p>현수막</p><p>스탠딩 배너</p><p>웹사이트</p>"
      }
    ]
  },
  {
    "id": 15,
    "name": "플래티넘",
    "desc": null,
    "visible": true,
    "price": 6000000,
    "limit": 12,
    "order": 3,
    "benefits": [
      {
        "id": 1,
        "name": "티켓 지원",
        "desc": "파이콘 한국을 즐길 수 있는 컨퍼런스 티켓을 지원합니다. 티켓 개수는 후원 등급 별 상이합니다.",
        "unit": "매",
        "is_countable": true,
        "offer": 5,
        "uncountable_offer": null
      },
      {
        "id": 2,
        "name": "부스",
        "desc": "후원사만의 공간에서 개발자 채용, 회사 또는 서비스 홍보, 코딩 챌린지, 제비 뽑기 등 다양한 행사를 진행할 수 있습니다.",
        "unit": "칸",
        "is_countable": true,
        "offer": 1,
        "uncountable_offer": null
      },
      {
        "id": 3,
        "name": "테이블",
        "desc": "후원사만의 공간에서 증정품을 나눠주거나, 채용상담 등 네트워킹을 하실 수 있습니다.",
        "unit": "칸",
        "is_countable": true,
        "offer": 0,
        "uncountable_offer": "-"
      },
      {
        "id": 4,
        "name": "후원사 세션",
        "desc": "파이콘 한국에서 후원사 로고를 걸고 파이썬 또는 회사/단체 내의 개발 문화에 대해서 이야기 할 수 있습니다.",
        "unit": "세션",
        "is_countable": true,
        "offer": 0,
        "uncountable_offer": "-"
      },
      {
        "id": 5,
        "name": "홍보 영상",
        "desc": "파이콘 한국에서 발표 세션 중간데 후원 등급별 노출 횟수에 따라 후원사 홍보 영상을 송출합니다.",
        "unit": "회",
        "is_countable": true,
        "offer": 2,
        "uncountable_offer": null
      },
      {
        "id": 6,
        "name": "로고 노출",
        "desc": "파이콘 한국 행사 전체와 홈페이지를 통해서 로고가 노출되며, 지난 홈페이지도 계속 보관, 유지되어 지속적으로 로고가 노출됩니다.",
        "unit": "",
        "is_countable": false,
        "offer": 0,
        "uncountable_offer": "<p>현수막</p><p>스탠딩 배너</p><p>웹사이트</p>"
      }
    ]
  },
  {
    "id": 16,
    "name": "골드",
    "desc": null,
    "visible": true,
    "price": 3000000,
    "limit": 10,
    "order": 4,
    "benefits": [
      {
        "id": 1,
        "name": "티켓 지원",
        "desc": "파이콘 한국을 즐길 수 있는 컨퍼런스 티켓을 지원합니다. 티켓 개수는 후원 등급 별 상이합니다.",
        "unit": "매",
        "is_countable": true,
        "offer": 3,
        "uncountable_offer": null
      },
      {
        "id": 2,
        "name": "부스",
        "desc": "후원사만의 공간에서 개발자 채용, 회사 또는 서비스 홍보, 코딩 챌린지, 제비 뽑기 등 다양한 행사를 진행할 수 있습니다.",
        "unit": "칸",
        "is_countable": true,
        "offer": 0,
        "uncountable_offer": "-"
      },
      {
        "id": 3,
        "name": "테이블",
        "desc": "후원사만의 공간에서 증정품을 나눠주거나, 채용상담 등 네트워킹을 하실 수 있습니다.",
        "unit": "칸",
        "is_countable": true,
        "offer": 1,
        "uncountable_offer": null
      },
      {
        "id": 4,
        "name": "후원사 세션",
        "desc": "파이콘 한국에서 후원사 로고를 걸고 파이썬 또는 회사/단체 내의 개발 문화에 대해서 이야기 할 수 있습니다.",
        "unit": "세션",
        "is_countable": true,
        "offer": 0,
        "uncountable_offer": "-"
      },
      {
        "id": 5,
        "name": "홍보 영상",
        "desc": "파이콘 한국에서 발표 세션 중간데 후원 등급별 노출 횟수에 따라 후원사 홍보 영상을 송출합니다.",
        "unit": "회",
        "is_countable": true,
        "offer": 1,
        "uncountable_offer": null
      },
      {
        "id": 6,
        "name": "로고 노출",
        "desc": "파이콘 한국 행사 전체와 홈페이지를 통해서 로고가 노출되며, 지난 홈페이지도 계속 보관, 유지되어 지속적으로 로고가 노출됩니다.",
        "unit": "",
        "is_countable": false,
        "offer": 0,
        "uncountable_offer": "<p>현수막</p><p>스탠딩 배너</p><p>웹사이트</p>"
      }
    ]
  },
  {
    "id": 17,
    "name": "스타트업",
    "desc": null,
    "visible": true,
    "price": 1000000,
    "limit": 10,
    "order": 5,
    "benefits": [
      {
        "id": 1,
        "name": "티켓 지원",
        "desc": "파이콘 한국을 즐길 수 있는 컨퍼런스 티켓을 지원합니다. 티켓 개수는 후원 등급 별 상이합니다.",
        "unit": "매",
        "is_countable": true,
        "offer": 0,
        "uncountable_offer": "-"
      },
      {
        "id": 2,
        "name": "부스",
        "desc": "후원사만의 공간에서 개발자 채용, 회사 또는 서비스 홍보, 코딩 챌린지, 제비 뽑기 등 다양한 행사를 진행할 수 있습니다.",
        "unit": "칸",
        "is_countable": true,
        "offer": 0,
        "uncountable_offer": "-"
      },
      {
        "id": 3,
        "name": "테이블",
        "desc": "후원사만의 공간에서 증정품을 나눠주거나, 채용상담 등 네트워킹을 하실 수 있습니다.",
        "unit": "칸",
        "is_countable": true,
        "offer": 1,
        "uncountable_offer": null
      },
      {
        "id": 4,
        "name": "후원사 세션",
        "desc": "파이콘 한국에서 후원사 로고를 걸고 파이썬 또는 회사/단체 내의 개발 문화에 대해서 이야기 할 수 있습니다.",
        "unit": "세션",
        "is_countable": true,
        "offer": 0,
        "uncountable_offer": "-"
      },
      {
        "id": 5,
        "name": "홍보 영상",
        "desc": "파이콘 한국에서 발표 세션 중간데 후원 등급별 노출 횟수에 따라 후원사 홍보 영상을 송출합니다.",
        "unit": "회",
        "is_countable": true,
        "offer": 0,
        "uncountable_offer": "-"
      },
      {
        "id": 6,
        "name": "로고 노출",
        "desc": "파이콘 한국 행사 전체와 홈페이지를 통해서 로고가 노출되며, 지난 홈페이지도 계속 보관, 유지되어 지속적으로 로고가 노출됩니다.",
        "unit": "",
        "is_countable": false,
        "offer": 0,
        "uncountable_offer": "<p>현수막</p><p>스탠딩 배너</p><p>웹사이트</p>"
      }
    ]
  },
  {
    "id": 18,
    "name": "커뮤니티",
    "desc": null,
    "visible": true,
    "price": 300000,
    "limit": 10,
    "order": 6,
    "benefits": [
      {
        "id": 1,
        "name": "티켓 지원",
        "desc": "파이콘 한국을 즐길 수 있는 컨퍼런스 티켓을 지원합니다. 티켓 개수는 후원 등급 별 상이합니다.",
        "unit": "매",
        "is_countable": true,
        "offer": 0,
        "uncountable_offer": "-"
      },
      {
        "id": 2,
        "name": "부스",
        "desc": "후원사만의 공간에서 개발자 채용, 회사 또는 서비스 홍보, 코딩 챌린지, 제비 뽑기 등 다양한 행사를 진행할 수 있습니다.",
        "unit": "칸",
        "is_countable": true,
        "offer": 0,
        "uncountable_offer": "-"
      },
      {
        "id": 3,
        "name": "테이블",
        "desc": "후원사만의 공간에서 증정품을 나눠주거나, 채용상담 등 네트워킹을 하실 수 있습니다.",
        "unit": "칸",
        "is_countable": true,
        "offer": 1,
        "uncountable_offer": null
      },
      {
        "id": 4,
        "name": "후원사 세션",
        "desc": "파이콘 한국에서 후원사 로고를 걸고 파이썬 또는 회사/단체 내의 개발 문화에 대해서 이야기 할 수 있습니다.",
        "unit": "세션",
        "is_countable": true,
        "offer": 0,
        "uncountable_offer": "-"
      },
      {
        "id": 5,
        "name": "홍보 영상",
        "desc": "파이콘 한국에서 발표 세션 중간데 후원 등급별 노출 횟수에 따라 후원사 홍보 영상을 송출합니다.",
        "unit": "회",
        "is_countable": true,
        "offer": 0,
        "uncountable_offer": "-"
      },
      {
        "id": 6,
        "name": "로고 노출",
        "desc": "파이콘 한국 행사 전체와 홈페이지를 통해서 로고가 노출되며, 지난 홈페이지도 계속 보관, 유지되어 지속적으로 로고가 노출됩니다.",
        "unit": "",
        "is_countable": false,
        "offer": 0,
        "uncountable_offer": "<p>현수막</p><p>웹사이트</p>"
      }
    ]
  },
  {
    "id": 19,
    "name": "출판사",
    "desc": "",
    "visible": true,
    "price": 60,
    "limit": 5,
    "order": 7,
    "benefits": [
      {
        "id": 1,
        "name": "티켓 지원",
        "desc": "파이콘 한국을 즐길 수 있는 컨퍼런스 티켓을 지원합니다. 티켓 개수는 후원 등급 별 상이합니다.",
        "unit": "매",
        "is_countable": true,
        "offer": 0,
        "uncountable_offer": "-"
      },
      {
        "id": 2,
        "name": "부스",
        "desc": "후원사만의 공간에서 개발자 채용, 회사 또는 서비스 홍보, 코딩 챌린지, 제비 뽑기 등 다양한 행사를 진행할 수 있습니다.",
        "unit": "칸",
        "is_countable": true,
        "offer": 0,
        "uncountable_offer": "-"
      },
      {
        "id": 3,
        "name": "테이블",
        "desc": "후원사만의 공간에서 증정품을 나눠주거나, 채용상담 등 네트워킹을 하실 수 있습니다.",
        "unit": "칸",
        "is_countable": true,
        "offer": 1,
        "uncountable_offer": null
      },
      {
        "id": 4,
        "name": "후원사 세션",
        "desc": "파이콘 한국에서 후원사 로고를 걸고 파이썬 또는 회사/단체 내의 개발 문화에 대해서 이야기 할 수 있습니다.",
        "unit": "세션",
        "is_countable": true,
        "offer": 0,
        "uncountable_offer": "-"
      },
      {
        "id": 5,
        "name": "홍보 영상",
        "desc": "파이콘 한국에서 발표 세션 중간데 후원 등급별 노출 횟수에 따라 후원사 홍보 영상을 송출합니다.",
        "unit": "회",
        "is_countable": true,
        "offer": 0,
        "uncountable_offer": "-"
      },
      {
        "id": 6,
        "name": "로고 노출",
        "desc": "파이콘 한국 행사 전체와 홈페이지를 통해서 로고가 노출되며, 지난 홈페이지도 계속 보관, 유지되어 지속적으로 로고가 노출됩니다.",
        "unit": "",
        "is_countable": false,
        "offer": 0,
        "uncountable_offer": "<p>현수막</p><p>스탠딩 배너</p><p>웹사이트</p>"
      }
    ]
  },
  {
    "id": 20,
    "name": "기술 후원",
    "desc": null,
    "visible": false,
    "price": 0,
    "limit": 1,
    "order": 8,
    "benefits": []
  },
  {
    "id": 21,
    "name": "장소 후원",
    "desc": null,
    "visible": false,
    "price": 0,
    "limit": 1,
    "order": 9,
    "benefits": []
  },
  {
    "id": 22,
    "name": "미디어 후원",
    "desc": "<p>미디어 후원<br></p>",
    "visible": false,
    "price": 0,
    "limit": 1,
    "order": 10,
    "benefits": []
  },
  {
    "id": 23,
    "name": "Special",
    "desc": "개최지원금 후원",
    "visible": false,
    "price": 0,
    "limit": 999,
    "order": 11,
    "benefits": []
  }
]