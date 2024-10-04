import Page from "components/common/Page";
import React, { useMemo } from "react";
import styled from "styled-components";
import { sortByKey } from "utils";
import useTranslation from "utils/hooks/useTranslation";
import { FallbackImg } from "components/common/FallbackImg";
import { SloganShort } from "assets/icons";

const OrganizingTeam = () => {
  const t = useTranslation();
  type Member = { name: string; comment?: string; imageFileName?: string };
  const members = useMemo<Member[]>(
    () =>
      sortByKey<Member>(
        [
          { name: "배권한" },
          { name: "권혁민", comment: "asdfasdfasdfasdf", imageFileName: "권혁민.jpg" },
          { name: "박성흠" },
          { name: "김순태" },
          { name: "김강민" },
          { name: "이우섭" },
          { name: "이영은" },
          { name: "김수빈" },
          { name: "심명진" },
          { name: "이한결" },
          { name: "이준원" },
          { name: "노하은" },
          { name: "임혜정" },
          { name: "이해용" },
          {
            name: "김수빈 (sudosubin)",
            comment: "내려갈 때 보았네 올라갈 때 보지 못한 그 꽃",
            imageFileName: "김수빈S.png",
          },
          { name: "정미르" },
          { name: "음대웅" },
          { name: "이준영" },
          { name: "김민정" },
          { name: "강나영" },
          { name: "윤준기" },
          { name: "송지헌" },
          { name: "김지희" },
          { name: "조성수" },
          { name: "박조은", comment: "Now is better than never.", imageFileName: "박조은.jpg" },
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
            <h4>{m.name}</h4>
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

    * {
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
