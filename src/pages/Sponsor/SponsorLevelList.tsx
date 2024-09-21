import { SponsorAPI } from "api";
import React, { useEffect, useState } from "react";
import useTranslation from "utils/hooks/useTranslation";
import { SponsorLevel, SponsorBenefit } from "models/sponsor";
import styled from "styled-components";

const SponsorLevelList = () => {
  const t = useTranslation();
  const [listOfSponsorLevel, setListOfSponsorLevel] = useState<SponsorLevel[][]>([]);
  const [listOfSponsorBenefit, setListOfSponsorBenefit] = useState<SponsorBenefit[]>([]);

  const prettryPrice = (price: number) => {
    return new Intl.NumberFormat("ko-KR").format(price);
  };

  const getBenefitDescription = (benefit: SponsorBenefit | undefined) => {
    if (benefit === undefined) return "-";
    if (benefit.is_countable) {
      return benefit.offer ? `${benefit.offer}${benefit.unit}` : benefit.uncountable_offer;
    }
    return benefit.uncountable_offer;
  };

  useEffect(() => {
    SponsorAPI.listSponsorLevels().then((levels) => {
      const onlyVisible = levels.filter((level) => level.visible);
      if (onlyVisible.length > 4) {
        const half_length = Math.floor(onlyVisible.length / 2);
        const firstSide = onlyVisible.slice(0, half_length);
        const secondSide = onlyVisible.slice(half_length);
        setListOfSponsorLevel([firstSide, secondSide]);
      } else {
        setListOfSponsorLevel([onlyVisible]);
      }
    });
    SponsorAPI.listSponsorBenefits().then((benefits) => {
      setListOfSponsorBenefit(benefits);
    });
  }, []);

  return (
    <Container>
      <Vertical>
        <H1>{t("후원사 등급 안내")}</H1>
        {listOfSponsorLevel.map((sponsorLevel) => (
          <SponsorRatingTable>
            <table>
              <thead>
                <td></td>
                {sponsorLevel.map((level) => (
                  <td>{level.name}</td>
                ))}
              </thead>
              <tbody>
                <tr>
                  <td>후원금</td>
                  {sponsorLevel.map((level) => {
                    const unit = level.name === "출판사" ? " 권" : " 원";
                    return (
                      <td>
                        {prettryPrice(level.price)}
                        {unit}
                      </td>
                    );
                  })}
                </tr>
                {listOfSponsorBenefit.map((benefit) => (
                  <tr>
                    <td>{benefit.name}</td>
                    {sponsorLevel.map((level) => {
                      const benefitAboutLevel = level.benefits.find(
                        (benefitByLevel) => benefitByLevel.id === benefit.id
                      );
                      return (
                        <td
                          dangerouslySetInnerHTML={{
                            __html: getBenefitDescription(benefitAboutLevel),
                          }}
                        ></td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </SponsorRatingTable>
        ))}
        <SponsorRatingTable>
          <H3>{t("전 등급 공통")}</H3>
          <ul>
            <li>{t("SNS 홍보")}</li>
            <li>{t("증정품 지급")}</li>
            <li>{t("후원 증서")}</li>
          </ul>
        </SponsorRatingTable>
        <Caution>
          <ul>
            <li>{t("표기된 금액은 부가세가 포함되지 않은 금액이며, 부가세는 10% 입니다.")}</li>
            <li>{t("추후 일부 내용이 변경될 수 있습니다.")}</li>
            <li>
              {t(
                "스타트업 스폰서십은 사내에서 파이썬을 사용하고, 설립 5년 이하, 사내 인원 30인 이하인 곳에 한합니다."
              )}
            </li>
            <li>{t("커뮤니티 스폰서십은 비영리 단체에 한해 후원이 가능합니다.")}</li>
            <li>{t("출판사 후원의 경우, 파이썬 관련 도서 출판 기록이 필요합니다.")}</li>
            <li>
              {t("후원 가능 여부나 기타 문의사항은 언제든지")}{" "}
              <a className="purple" href="mailto:sponsor@pycon.kr">
                sponsor@pycon.kr
              </a>{" "}
              {t("로 문의 주시기 바랍니다.")}
            </li>
          </ul>
        </Caution>
      </Vertical>
    </Container>
  );
};

export default SponsorLevelList;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  width: 100%;

  &:nth-child(even) {
    background-color: #141414;
  }
`;

const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;
`;

const Caution = styled.div`
  width: 100%;

  & > ul {
    margin-left: 1.5rem;
    display: block;
    padding-top: 1rem;

    @media only screen and (max-width: 810px) {
      width: 85%;
      margin-left: 2rem;
    }

    & > li {
      list-style: disc;
      text-align: start;
      font-size: 16px;

      @media only screen and (max-width: 810px) {
        font-size: 12px;
      }
    }
  }
`;

const SponsorRatingTable = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #b0a8fe;
  border-radius: 1rem;
  margin-top: 2rem;

  @media only screen and (max-width: 810px) {
    width: 90%;
    margin: 2rem 1rem 0 1rem;
  }

  & > h3 {
    text-align: start;
    padding-left: 2rem;
  }

  & > ul {
    padding-left: 1.5rem;
    padding-bottom: 0.5rem;

    & > li {
      list-style: disc;
      text-align: start;
      color: #b0a8fe;
      font-size: 16px;
    }
  }

  & > table {
    background: tansparent;
    border-collapse: collapse;
    border-style: hidden;

    & > thead > td {
      text-align: center;
      background: #b0a8fe;
      color: #141414;

      @media only screen and (max-width: 810px) {
        font-size: 12px;
      }

      &:first-child {
        border-top-left-radius: 0.5rem;
      }

      &:last-child {
        border-top-right-radius: 0.5rem;
      }
    }

    & > tbody > tr > td {
      @media only screen and (max-width: 810px) {
        font-size: 10px;
      }

      & > * {
        color: #b0a8fe;
        margin: 0;
      }

      border-bottom: 1px solid #b0a8fe;
      padding: 1rem 0;
      text-align: center;
      background: #141414;
      color: #b0a8fe;
    }
  }
`;

const H1 = styled.h1`
  margin-top: 3rem;
  font-size: 40px;
  color: #b0a8fe;

  @media only screen and (max-width: 810px) {
    padding: 0 1rem;
    font-size: 24px;
  }
`;

const H3 = styled.h3`
  margin-top: 1.5rem;
  font-size: 24px;
  color: #b0a8fe;

  @media only screen and (max-width: 810px) {
    padding: 0 1rem;
    font-size: 16px;
  }
`;
