import Page from "components/common/Page"
import React from "react"
import styled from "styled-components"
import useTranslation from "utils/hooks/useTranslation"

const Tutorial = () => {
  const t = useTranslation()

  return (
    <Page title={t("튜토리얼")}>
      <h1>{t("튜토리얼")}</h1>
      <div>
        <p>
          <h2>튜토리얼이란?</h2>
          튜토리얼은 초보자들을 위해, 또는 새로운 것을 접하는 사람들을 위해 진행하는 교육 프로그램입니다.<br />
          직접 컴퓨터를 가져와서 진행하며 현장에서 질문하고 해결하는 만큼 해당 기술에 대해 좀 더 깊게 알게됩니다.<br />
        </p>

        <hr />

        <p>
          <h2>튜토리얼 프로그램 소개</h2>
          <small>
            * 튜토리얼 프로그램은 오전 / 오후 두 타임으로 구성되어 있습니다. 신청 시 시간대가 겹치지 않도록 주의해주시기 바랍니다!
          </small>
        </p>
        <br />
        <p>
          <h3>오전 세션 <sup>[10:00 - 13:00]</sup></h3>
          <TutorialProgramDetails>
            <summary>FastAPI로 CRUD API 서버 만들기</summary>
            <div>
              <ul>
                <li><h5>장소 : 강의실20</h5></li>
                <li>
                  <h5>수강 대상</h5>
                  <ul>
                    <li>파이썬은 해보았지만, 웹개발은 아직 처음 또는 헤매시는 분</li>
                  </ul>
                </li>
                <li>
                  <h5>준비물</h5>
                  <ul>
                    <li>노트북 필수</li>
                    <li>기본적인 파이썬 문법 사용이 가능하신 분</li>
                  </ul>
                </li>
                <li>
                  <h5>상세 내용</h5>
                  <ul>
                    <li>비동기 동작 설명</li>
                    <li>FastAPI 기본 개념 설명</li>
                    <li>실제 API 작성 및 테스트 코드 작성 (시간에 따라 일부 조정될 수 있음)</li>
                  </ul>
                </li>
              </ul>
              <fieldset>
                <legend>진행자 소개</legend>
                <p>
                  <h4>한바름</h4>
                  <ul>
                    <li>파이썬 사용 5년째</li>
                    <li>&lt; 나를 위한 업무관리 툴: SLASH &gt; 제작사 <b>시그</b> 근무중</li>
                    <li>&lt; 처음 시작하는 FastAPI &gt; 공역</li>
                  </ul>
                </p>
              </fieldset>
            </div>
          </TutorialProgramDetails>
          <TutorialProgramDetails>
            <summary>RAG로 코드베이스 검색하는 간단한 웹앱 만들기</summary>
            <div>
              <ul>
                <li><h5>장소 : 리더스홀</h5></li>
                <li>
                  <h5>수강 대상</h5>
                  <ul>
                    <li>Python을 다뤄본 적이 있는 AI에 관심있는 누구나</li>
                  </ul>
                </li>
                <li>
                  <h5>준비물</h5>
                  <ul>
                    <li>노트북</li>
                  </ul>
                </li>
                <li>
                  <h5>상세 내용</h5>
                  <ul>
                    <li>RAG의 기초 내용에 대해 알아보고 나만의 코드베이스 질의 앱을 만들어봅니다.</li>
                  </ul>
                </li>
              </ul>
              <fieldset>
                <legend>진행자 소개</legend>
                <p>
                  <h4>박진형</h4>
                  <ul>
                    <li>AI, FinTech 등 다양한 도메인에서 파이썬을 도입, 사용하는 것을 즐겨하는 <a href="https://sionic.ai" target="_blank" rel="noreferrer">Sionic AI</a> 소속 Python Backend Engineer입니다.</li>
                  </ul>
                </p>
              </fieldset>
            </div>
          </TutorialProgramDetails>
        </p>
        <br />
        <p>
          <h3>오후 세션 <sup>[14:00 - 18:00]</sup></h3>
          <TutorialProgramDetails>
            <summary>Django ORM 톺아보기</summary>
            <div>
              <ul>
                <li><h5>장소 : 강의실20</h5></li>
                <li>
                  <h5>수강 대상</h5>
                  <ul>
                    <li>파이썬 혹은 그 중 Django를 기반으로 웹 백엔드 서비스를 시작하는 분들</li>
                  </ul>
                </li>
                <li>
                  <h5>준비물</h5>
                  <ul>
                    <li>Docker</li>
                    <li>MySQL</li>
                    <li>PyCharm 등의 코드 에디터</li>
                  </ul>
                </li>
                <li>
                  <h5>상세 내용</h5>
                  <ul>
                    <li><a href="https://peps.python.org/pep-0249/)" target="_blank" rel="noreferrer">[PEP 249 - Python Database API]</a>를 리뷰하고 파이썬과 데이터베이스의 통신을 이해</li>
                    <li>이해도를 바탕으로 쿼리를 실행하고 객체로 받아오는 과정을 수행</li>
                    <li>Django Model과 Manager가 DML이 되는 과정 이해</li>
                    <li>Django Model과 Migration이 DDL이 되는 과정 이해</li>
                    <li>Django App 과 DB Session 간의 관계 이해</li>
                  </ul>
                </li>
                <li>
                  <h5>과제 실습</h5>
                  <ul>
                    <li>DML, DDL을 내가 원하는 방식으로 구성할수 있도록 컴파일러 만들어보기</li>
                    <li>DB Session을 관리하는 간단한 커넥션 풀 만들기</li>
                  </ul>
                </li>
                <li>
                  <h5>요구 지식</h5>
                  <ul>
                    <li>웹 서버의 동작방식에 대한 이해</li>
                    <li>파이썬 클래스, 딕셔너리 등 기초 타입 이해</li>
                    <li>MySQL과 같은 RDBMS 데이터베이스 사용 경험</li>
                  </ul>
                </li>
              </ul>
              <fieldset>
                <legend>진행자 소개</legend>
                <p>
                  <h4>이재연 <small><a href="https://leejaedus.github.io/resume/" target="_blank" rel="noreferrer">(소개 링크)</a></small></h4>
                  <ul>
                    <li>토스에서 파이썬 백엔드 리드, 인터널 플랫폼 팀 리더로 일하고 있습니다.</li>
                  </ul>
                </p>
              </fieldset>
            </div>
          </TutorialProgramDetails>
          <TutorialProgramDetails>
            <summary>LangChain 의 에이전트(Agent) 활용법</summary>
            <div>
              <ul>
                <li><h5>장소 : 리더스홀</h5></li>
                <li>
                  <h5>수강 대상</h5>
                  <ul>
                    <li>기초적인 RAG 개념을 이해하고 있는 분</li>
                    <li>Naive RAG 구현 경험이 있는 분</li>
                    <li>Agent에 관심이 있는 분</li>
                  </ul>
                </li>
                <li>
                  <h5>상세 내용 & 준비물</h5>
                  <h6>개발 환경</h6>
                  <ul>
                    <li>Python 3.10 이상</li>
                    <li>VS Code (권장 IDE)</li>
                    <li>OpenAI API Key</li>
                    <li>Git/Github</li>
                  </ul>
                  <h6>환경 설정 가이드</h6>
                  <p>환경 설정이 완료되지 않은 경우 실습 진행에 제한이 있을 수 있습니다. 반드시 강의 전까지 설치를 완료해 주시기 바랍니다.</p>
                  <ul>
                    <li>Windows 사용자: [<a href="https://youtu.be/mVu6Wj8Z7C0?si=GnlZEOa_n15CXm7K&amp;t=555" target="_blank" rel="noreferrer">환경 설치 가이드 영상</a>] / [<a href="https://teddynote.com/10-RAG%EB%B9%84%EB%B2%95%EB%85%B8%ED%8A%B8/%ED%99%98%EA%B2%BD%20%EC%84%A4%EC%A0%95%20(Windows)/" target="_blank" rel="noreferrer">환경 설치 가이드 문서</a>]</li>
                    <li>Mac 사용자: [<a href="https://youtu.be/mVu6Wj8Z7C0?si=EC_b2MIybS5nT7Lg&amp;t=1308" target="_blank" rel="noreferrer">환경 설치 가이드 영상</a>] / [<a href="https://teddynote.com/10-RAG%EB%B9%84%EB%B2%95%EB%85%B8%ED%8A%B8/%ED%99%98%EA%B2%BD%20%EC%84%A4%EC%A0%95%20(Mac)/" target="_blank" rel="noreferrer">환경 설치 가이드 문서</a>]</li>
                  </ul>
                  <h6>실습 자료</h6>
                  <ul>
                    <li>[<a href="https://github.com/teddylee777/langchain-kr" target="_blank" rel="noreferrer">실습 소스코드 저장소</a>]</li>
                  </ul>
                </li>
                <li>
                  <h5>커리큘럼</h5>
                  <h6>Part 1: LangChain Tools &amp; Agent 기초</h6>
                  <ul>
                    <li>LangChain 도구(Tools)와 툴킷(Toolkits) 이해</li>
                    <li>사용자 정의 도구(Custom Tools) 구현</li>
                    <li>LLM에 도구 바인딩(Binding Tools)</li>
                    <li>Agent와 AgentExecutor 생성 및 활용</li>
                  </ul>
                  <h6>Part 2: Agent 고급 기능</h6>
                  <ul>
                    <li>Agent 중간단계 스트리밍(stream) 구현</li>
                    <li>AgentStreamParser 활용</li>
                    <li>Agent에 메모리 추가(멀티턴 구현)</li>
                    <li>다양한 LLM 활용 (GPT, Claude, Gemini, TogetherAI, Ollama)</li>
                    <li>iter() 함수를 통한 단계별 출력</li>
                    <li>Human-in-the-loop 구현</li>
                  </ul>
                  <h6>Part 3: 실전 응용</h6>
                  <ul>
                    <li>Agentic RAG 구현</li>
                    <li>데이터 분석 Agent 개발</li>
                    <li>CSV, EXCEL 파일 분석</li>
                    <li>업무자동화 Agent 구현</li>
                    <li>FileManagementToolkits를 활용한 파일 관리</li>
                    <li>보고서 작성 Agent</li>
                    <li>web-search</li>
                    <li>retriever</li>
                    <li>file handling</li>
                    <li>image-generation</li>
                  </ul>
                  <h6>Part 4: 프로젝트</h6>
                  <ul>
                    <li>CSV 파일 기반 데이터분석 Agent 구현</li>
                    <li>실전 데이터 분석</li>
                    <li>시각화</li>
                    <li>리포트 생성</li>
                  </ul>
                </li>
              </ul>
              <fieldset>
                <legend>진행자 소개</legend>
                <p>
                  <h4>이경록 &lt;Teddy Lee&gt; <small><a href="https://linktr.ee/teddynote" target="_blank" rel="noreferrer">(소개 링크)</a></small></h4>
                  <ul>
                    <li><b><a href="http://www.youtube.com/@teddynote" target="_blank" rel="noreferrer">YouTube 테디노트</a></b> 채널 운영</li>
                    <li>LLM, RAG 개발 및 강의</li>
                  </ul>
                </p>
              </fieldset>
            </div>
          </TutorialProgramDetails>

        </p>

        <hr />

        <p>
          <h2>시간 &amp; 장소</h2>
          <ul>
            <li>시간 : 10:00 ~ 18:00</li>
            <li>장소 : 서울 서대문구 연희로 2길 62</li>
          </ul>
        </p>
        <br />
        <p>
          <h3>기타 안내</h3>
          <ul>
            <li>행사 당일 식사 및 주차 공간은 지원되지 않습니다.</li>
            <li>주변에 주차 공간이 여의치 않습니다. 대중교통을 이용해주시는 것을 권장드립니다.</li>
            <li>본 세션은 개인 장비 (노트북 등)을 반드시 지참하셔야 합니다.</li>
            <li><a href="https://pythonkr.github.io/pycon-code-of-conduct/ko/coc/a_intent_and_purpose.html" target="_self">파이콘 한국 행동 강령 CoC</a>를 준수해주시기 바라며, 협력적인 분위기에서 활동해주세요!</li>
          </ul>
        </p>
      </div>
    </Page>
  )
}

export default Tutorial

const TutorialProgramDetails = styled.details`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;

  color: var(--pico-color);

  summary {
    font-size: 1.15rem;
    font-weight: bold;
    cursor: pointer;
    padding: 0.25rem 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }

  div {
    font-size: 0.875rem;

    h5 {
      margin-bottom: 0.5rem;
    }

    fieldset {
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      padding: 0.5rem;
      margin: 0;

      legend {
        font-size: 0.75rem;
        font-weight: bold;
        color: var(--pico-color);
        margin: 0;
      }

      h4 {
        font-weight: bold;
        margin: 0.25rem;

        a {
          color: #b0a8fe;
        }
      }
    }
  }

  &[open] {
    background: rgba(176, 168, 254, 0.1);

    summary {
      color: rgb(176, 168, 254);

      &:not([role]):not(:focus) {
        color: rgb(176, 168, 254);
      }
    }
  }
`
