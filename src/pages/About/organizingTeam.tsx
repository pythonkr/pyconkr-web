import Page from "components/common/Page";
import React, { useMemo } from "react";
import styled from "styled-components";
import { sortByKey } from "utils";
import useTranslation from "utils/hooks/useTranslation";
import { FallbackImg } from "components/common/FallbackImg";
import { SloganShort } from "assets/icons";

const OrganizingTeam = () => {
  const t = useTranslation();
  type Member = {
    name: string;
    displayName?: string;
    comment?: React.ReactNode;
    imageFileName?: string;
  };
  const members = useMemo<Member[]>(
    () =>
      sortByKey<Member>(
        [
          { name: "배권한", comment: "우리모두 파이썬으로 같이 합시다." },
          {
            name: "권혁민",
            comment: "Pie, Remidomine... Benedicite!",
            imageFileName: "권혁민.jpg",
          },
          { name: "박성흠" },
          {
            name: "김순태",
            comment: (
              <>
                파이썬으로 개발합니다.{" "}
                <a href="https://www.linkedin.com/in/kst6294/" target="_blank" rel="noreferrer">
                  https://www.linkedin.com/in/kst6294/
                </a>
              </>
            ),
            imageFileName: "김순태.jpeg",
          },
          {
            name: "김강민",
            displayName: "김강민/KLOU",
            comment:
              "파이썬과 파이콘을 사랑하는 데이터 저널리스트입니다. 시빅 테크 커뮤니티 코드포코리아 오거나이저이기도 합니다. 기술을 통해 사회 문제를 해결하는 데 관심이 있습니다.",
            imageFileName: "김강민.jpg",
          },
          {
            name: "이우섭",
            displayName: "WooSub Lee",
            comment: (
              <>
                LoveFrom,{" "}
                <a href="https://www.linkedin.com/in/woosublee" target="_blank" rel="noreferrer">
                  https://www.linkedin.com/in/woosublee
                </a>
              </>
            ),
            imageFileName: "이우섭.png",
          },
          { name: "이영은" },
          { name: "심명진" },
          { name: "이한결" },
          {
            name: "이준원",
            comment: (
              <>
                아직 파이썬 실력이 이븐하지 않습니다.{" "}
                <a href="https://github.com/cpprhtn" target="_blank" rel="noreferrer">
                  https://github.com/cpprhtn
                </a>
              </>
            ),
            imageFileName: "이준원.jpeg",
          },
          {
            name: "노하은",
            comment: (
              <>
                프로그래밍과 오픈소스를 사랑하는 기획자입니다.
                <br />
                <a
                  href="https://www.linkedin.com/in/bluepicture08"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.linkedin.com/in/bluepicture08
                </a>
              </>
            ),
            imageFileName: "노하은.jpeg",
          },
          { name: "이해용", comment: "파이썬을 좋아하는 개발자입니다." },
          {
            name: "김수빈",
            displayName: "김수빈 (sudosubin)",
            comment: "내려갈 때 보았네 올라갈 때 보지 못한 그 꽃",
            imageFileName: "김수빈S.png",
          },
          { name: "정미르", comment: "if import this and hire(me): can_do_anything()" },
          {
            name: "이준영",
            displayName: "이준영 / MUsoftware",
            comment: "개미는 (뚠뚠) 오늘도 (뚠뚠) 열심히 일을 하네",
            imageFileName: "이준영.png",
          },
          { name: "김민정" },
          { name: "강나영" },
          {
            name: "윤준기",
            comment: (
              <>
                안녕하세요, 23년도에는 파이콘 스피커로
                <br />
                24년도에는 파준위로 활동하고 있는 윤준기 입니다.
                <br />
                개발이나 다양한 주제로 이야기 하는 것을 좋아합니다 :)
              </>
            ),
            imageFileName: "윤준기.jpeg",
          },
          {
            name: "송지헌",
            displayName: "송지헌 / Honey",
            comment: "Everything for Python!c Moments",
            imageFileName: "송지헌.png",
          },
          { name: "김지희" },
          {
            name: "삐야기",
            comment: "파이썬 나라의 개발자들이 먹을 치킨을 튀기고 있는 삐야기입니다.",
            imageFileName: "삐야기.jpg",
          },
          { name: "박조은", comment: "Now is better than never.", imageFileName: "박조은.png" },
        ],
        "name"
      ),
    []
  );

  return (
    <Page>
      <h1>{t("파이콘 한국 준비위원회")}</h1>
      <p>
        {t(
          "파이콘 한국 준비위원회는 2014년 조직되어, 올해 열한 번째 한국에서의 파이콘 행사를 준비하고 있습니다. "
        )}
        <br />
        {t(
          "준비위원회는 매년 신규 멤버를 모집하는 파이콘을 사랑하는 사람들의 열린 모임입니다."
        )}{" "}
        {t("(가나다순)")}
      </p>

      {members.map((m, idx) => (
        <MemberContainer key={`${m.name}-${idx}`}>
          <section className="left">
            {m.imageFileName ? (
              <FallbackImg
                src={`/images/organizingTeam/${m.imageFileName}`}
                alt={m.name}
                errorFallback={<SloganShort />}
              />
            ) : (
              <SloganShort />
            )}
          </section>
          <section className="right">
            <h4>{m.displayName ?? m.name}</h4>
            <div>{m.comment ?? "Pythonic Moments"}</div>
          </section>
        </MemberContainer>
      ))}
    </Page>
  );
};

export default OrganizingTeam;

const MemberContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 0.5rem 0;

  display: flex;

  & > section.left {
    width: 5rem;
    height: 5rem;
    margin: 0.5rem;

    border-radius: 50%;
    border: 1px solid var(--pico-muted-border-color);

    img,
    svg {
      width: 100%;
      height: 100%;
      min-width: 100%;
      min-height: 100%;
      max-width: 100%;
      max-height: 100%;
      border-radius: 50%;
    }

    @media only screen and (max-width: 809px) {
      width: 5rem;
      height: 5rem;
      margin: 0.25rem;
    }
  }

  & > section.right {
    width: calc(100% - 6rem);
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
      color: #febd99;
      margin-bottom: 0.2rem;
    }

    & > div {
      margin-bottom: 0.3rem;
      color: var(--pico-h3-color);
      font-size: 0.8rem;
      font-weight: bold;
      min-height: 1rem;
    }
  }

  @media only screen and (max-width: 809px) {
    width: 75%;

    p {
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
`;
