import { wrap } from "@suspensive/react";
import React from "react";
import Markdown from "react-markdown";
import * as R from "remeda";

import { SloganShort } from "assets/icons";
import { FallbackImg } from "components/common/FallbackImg";
import Page from "components/common/Page";
import { APIPretalxSessions } from "models/api/session";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { useRetrieveSessionQuery } from "utils/hooks/useAPI";
import useTranslation from "utils/hooks/useTranslation";

const SessionSpeakerItem: React.FC<{ speaker: APIPretalxSessions[0]["speakers"][0] }> = ({
  speaker,
}) => {
  return (
    <SessionSpeakerItemStyled>
      <SessionSpeakerImageContainerStyled>
        <FallbackImg
          src={speaker.avatar ?? ""}
          alt={speaker.name}
          errorFallback={<SloganShort />}
        />
      </SessionSpeakerImageContainerStyled>
      <div>
        <h3>{speaker.name}</h3>
        <Markdown>{speaker.biography}</Markdown>
      </div>
    </SessionSpeakerItemStyled>
  );
};

const SessionDetail: React.FC<{ session: APIPretalxSessions[0] }> = ({ session }) => {
  const t = useTranslation();

  let locale = "알 수 없음";
  switch (session.content_locale) {
    case "ko":
      locale = "한국어";
      break;
    case "en":
      locale = "영어";
      break;
    case "ja":
      locale = "일본어";
      break;
    default:
      locale = "알 수 없음";
  }

  return (
    <SessionDetailStyled>
      <h1>{session.title}</h1>
      <h4>{session.abstract}</h4>
      <hr />
      <SessionInfoContainerStyled>
        <p>
          {t("언어")} : {t(locale)}
        </p>
        <p>
          {t("발표 시간")} : {session.duration}
          {t("분")}
        </p>
        <p>
          {t("발표 장소")} :{" "}
          {t(session.slot?.room[Object.keys(session.slot?.room ?? {})[0]] ?? "알 수 없음")}
        </p>
        <p>
          <TagContainer>
            <div style={{ margin: 0 }}>{t("태그")} :</div>
            {session.tags.map((tag) => (
              <Tag key={tag}>{t(tag)}</Tag>
            ))}
            {session.do_not_record && <Tag>{t("녹화 불가")}</Tag>}
          </TagContainer>
        </p>
      </SessionInfoContainerStyled>
      <hr />
      <h3>{t("설명")}</h3>
      <Markdown>{session.description}</Markdown>
      <hr />
      <h3>{t("발표자 소개")}</h3>
      {session.speakers.map((speaker) => (
        <SessionSpeakerItem speaker={speaker} key={speaker.code} />
      ))}
      <hr />
    </SessionDetailStyled>
  );
};

export const SessionDetailPage: React.FC = () => {
  const t = useTranslation();
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();

  React.useEffect(() => window.scrollTo(0, 0), []);

  if (!(R.isString(code) && !R.isEmpty(code))) {
    navigate("/session");
    return null;
  }

  const SessionDetailWrapper = wrap
    .ErrorBoundary({ fallback: <h4>{t("세션 정보를 불러오는 중 에러가 발생했습니다.")}</h4> })
    .Suspense({ fallback: <h4>{t("세션 정보를 불러오는 중 입니다.")}</h4> })
    .on(() => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data } = useRetrieveSessionQuery(code);
      return <SessionDetail session={data} />;
    });

  return (
    <Page>
      <ReturnToSessionList onClick={() => navigate(-1)}>
        ⬅️ {t("세션 목록으로 돌아가기")}
      </ReturnToSessionList>
      <SessionDetailWrapper />
    </Page>
  );
};

const ReturnToSessionList = styled.small`
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
`;

const SessionDetailStyled = styled.div`
  h1 {
    font-size: 2rem;
    margin-top: 1rem;
  }

  h3 {
    margin-top: 1.5rem;
  }

  @media only screen and (max-width: 809px) {
    h1 {
      font-size: 1.5rem;
      margin-top: 1rem;
    }

    h4 {
      font-size: 1rem;
    }
  }
`;

const SessionInfoContainerStyled = styled.div`
  * {
    margin: 0.5rem 0;
  }
`;

const SessionSpeakerItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.75rem;

  h3 {
    margin-top: 0;
    color: #fff;
  }
`;

const SessionSpeakerImageContainerStyled = styled.div`
  flex: 0 0 auto;

  width: 6rem;
  height: 6rem;
  min-width: 6rem;
  min-height: 6rem;
  max-width: 6rem;
  max-height: 6rem;
  margin: 0.25rem;
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
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const Tag = styled.kbd`
  margin: 0;
  background-color: #b0a8fe;
  font-family: var(--pico-font-family);
`;
