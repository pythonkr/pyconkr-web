import { APISponsorBenefit } from "../../models/api/sponsor";


export const SPONSOR_BENEFITS : APISponsorBenefit[] = [
  {
    "id": 1,
    "name": "티켓 지원",
    "desc": "파이콘 한국을 즐길 수 있는 컨퍼런스 티켓을 지원합니다. 티켓 개수는 후원 등급 별 상이합니다.",
    "unit": "매",
    "is_countable": true
  },
  {
    "id": 2,
    "name": "부스",
    "desc": "후원사만의 공간에서 개발자 채용, 회사 또는 서비스 홍보, 코딩 챌린지, 제비 뽑기 등 다양한 행사를 진행할 수 있습니다.",
    "unit": "칸",
    "is_countable": true
  },
  {
    "id": 3,
    "name": "테이블",
    "desc": "후원사만의 공간에서 증정품을 나눠주거나, 채용상담 등 네트워킹을 하실 수 있습니다.",
    "unit": "칸",
    "is_countable": true
  },
  {
    "id": 4,
    "name": "후원사 세션",
    "desc": "파이콘 한국에서 후원사 로고를 걸고 파이썬 또는 회사/단체 내의 개발 문화에 대해서 이야기 할 수 있습니다.",
    "unit": "세션",
    "is_countable": true
  },
  {
    "id": 5,
    "name": "홍보 영상",
    "desc": "파이콘 한국에서 발표 세션 중간데 후원 등급별 노출 횟수에 따라 후원사 홍보 영상을 송출합니다.",
    "unit": "회",
    "is_countable": true
  },
  {
    "id": 6,
    "name": "로고 노출",
    "desc": "파이콘 한국 행사 전체와 홈페이지를 통해서 로고가 노출되며, 지난 홈페이지도 계속 보관, 유지되어 지속적으로 로고가 노출됩니다.",
    "unit": "",
    "is_countable": false
  }
]