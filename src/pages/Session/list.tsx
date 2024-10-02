import { wrap } from "@suspensive/react"
import React from "react"
import { useNavigate } from "react-router"
import * as R from "remeda"
import styled from "styled-components"

import { SloganShort } from "assets/icons"
import { FallbackImg } from "components/common/FallbackImg"
import Page from "components/common/Page"
import { APIPretalxSessions } from "models/api/session"
import { useListSessionsQuery } from "utils/hooks/useAPI"
import useTranslation from "utils/hooks/useTranslation"

const SessionItem: React.FC<{ session: APIPretalxSessions[0] }> = ({ session }) => {
  const t = useTranslation();
  const navigate = useNavigate();

  const speakerImageSrc = (
    session.image
    || R.isArray(session.speakers) && !R.isEmpty(session.speakers) && session.speakers[0].avatar
    || ""
  )
  const urlSafeTitle = session.title.replace(/ /g, "-").replace(/(?![A-Za-zㄱ-ㅣ가-힣-])./g, "")

  return (
    <SessionItemEl>
      <SessionItemImgContainer>
        <FallbackImg
          src={speakerImageSrc}
          alt={session.title}
          errorFallback={<SloganShort />}
        />
      </SessionItemImgContainer>
      <SessionItemInfoContainer>
        <h4 onClick={() => navigate(`/session/${session.code}#${urlSafeTitle}`)}>{session.title}</h4>
        <p>{session.abstract}</p>
        <SessionSpeakerContainer>
          by{" "}
          {session.speakers.map((speaker) => (
            <kbd key={speaker.code}>{speaker.name}</kbd>
          ))}
        </SessionSpeakerContainer>
        <TagContainer>
          {session.tags.map((tag) => (
            <Tag key={tag}>{t(tag)}</Tag>
          ))}
          {session.do_not_record && <Tag>{t("녹화 불가")}</Tag>}
        </TagContainer>
      </SessionItemInfoContainer>
    </SessionItemEl>
  );
};

export const SessionListPage = () => {
  const t = useTranslation();

  const SessionList = wrap
    .ErrorBoundary({ fallback: <h4>{t("세션 목록을 불러오는 중 에러가 발생했습니다.")}</h4> })
    .Suspense({ fallback: <h4>{t("세션 목록을 불러오는 중 입니다.")}</h4> })
    .on(() => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data } = useListSessionsQuery();
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [currentTag, setTag] = React.useState<string | null>(null);
      const setOrUnsetTag = (tag: string) => setTag(currentTag === tag ? null : tag);
      const sessionOnlyData = data
        .filter((d) => d.submission_type.en === "Session")
        .filter((d) => currentTag === null || d.tags.includes(currentTag));

      const tags = Array.from(new Set(data.flatMap((session) => session.tags))).sort();
      return (
        <>
          <hr style={{ margin: 0 }} />
          <TagFilterBtnContainer>
            <div>
              {tags.map((tag) => (
                <TagFilterBtn
                  key={tag}
                  onClick={() => setOrUnsetTag(tag)}
                  className={tag === currentTag ? "selected" : ""}
                >
                  {t(tag)}
                </TagFilterBtn>
              ))}
            </div>
          </TagFilterBtnContainer>
          {sessionOnlyData.map((session) => (
            <SessionItem key={session.code} session={session} />
          ))}
        </>
      );
    });

  return (
    <Page>
      <h1>{t("세션 목록")}</h1>
      <hr />
      <h6 style={{ paddingLeft: "1rem" }}>
        * {t("발표 목록은 발표자 사정에 따라 변동될 수 있습니다.")}
      </h6>
      <SessionList />
    </Page>
  );
};

const TagFilterBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TagFilterBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  font-size: 0.8rem;

  &:focus,
  button::-moz-focus-inner {
    outline: none !important;
  }

  &.selected {
    background-color: #b0a8fe;
    color: black;
    font-weight: bold;
  }
`;

const SessionItemEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.75rem;
  gap: 1rem;

  color: var(--pico-h6-color);

  border-top: 1px solid var(--pico-muted-border-color);
  border-bottom: 1px solid var(--pico-muted-border-color);

  @media only screen and (max-width: 809px) {
    padding: 0rem;
    gap: 0.5rem;
  }
`;

const SessionItemImgContainer = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0.6rem;
  flex-shrink: 0;
  flex-grow: 0;

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
`;

const SessionItemInfoContainer = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  flex-grow: 1;

  h4 {
    color: #febd99;
    margin-bottom: 0.2rem;
    cursor: pointer;
  }

  p {
    margin-bottom: 0.3rem;
    color: var(--pico-h3-color);
    font-size: 0.8rem;
    font-weight: bold;
  }

  @media only screen and (max-width: 809px) {
    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
`;

const SessionSpeakerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  color: var(--pico-h6-color);
  font-size: 0.6rem;

  img {
    width: 0.75rem;
    height: 0.75rem;
    min-width: 0.75rem;
    min-height: 0.75rem;
    max-width: 0.75rem;
    max-height: 0.75rem;
    border-radius: 50%;
    background-color: #f0f0f0;
  }

  kbd {
    background-color: #def080;
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;

    font-size: 0.6rem;
  }
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.25rem 0;
  gap: 0.25rem;
`;

const Tag = styled.kbd`
  background-color: #b0a8fe;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;

  font-size: 0.6rem;
`;
